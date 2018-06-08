import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
import { LOCATION_CHANGED, push } from 'redux-little-router'
import { fetchUser } from './services/randomuser'
import {
  getSessionHash,
  setSessionHash,
  removeSessionHash
} from './services/localStorage'
import { LOGIN } from './routes'
import { updateUser, login, logout } from './actions'

function* updateDocumentTitle() {
  const wantedTitle = yield select(({ router }) => router.result.title)
  if (wantedTitle) {
    document.title = wantedTitle
  }
}

function* ensureUser() {
  const currentRoute = yield select(({ router }) => router.result.id)
  if (currentRoute !== LOGIN) {
    const user = yield select(({ user }) => user)
    if (!user || !user.email) {
      const sessionHash = getSessionHash()
      if (sessionHash) {
        const { results, info } = yield call(fetchUser, sessionHash)
        yield put(updateUser({ results: results.pop(), info }))
      } else {
        const currentPath = yield select(({ router }) => router.pathname)
        yield put(push(`/${LOGIN}/?redirectTo=${currentPath}`))
      }
    }
  }
}

function* loginUser({ payload }) {
  const sessionHash = setSessionHash(payload)
  const { results, info } = yield call(fetchUser, sessionHash)
  yield put(updateUser({ results: results.pop(), info }))
  const redirectTo = yield select(
    ({ router }) =>
      router.query && router.query.redirectTo ? router.query.redirectTo : null
  )
  if (redirectTo) {
    yield put(push(`${redirectTo}`))
  } else {
    yield put(push('/'))
  }
}

function* logoutUser() {
  removeSessionHash()
  yield put(updateUser({ results: {}, info: {} }))
  yield put(push(`/${LOGIN}`))
}

export { ensureUser, loginUser, logoutUser, updateDocumentTitle }

export default function* rootSaga() {
  yield all([
    takeEvery(LOCATION_CHANGED, updateDocumentTitle),
    takeLatest(LOCATION_CHANGED, ensureUser),
    takeLatest(login, loginUser),
    takeLatest(logout, logoutUser)
  ])
}
