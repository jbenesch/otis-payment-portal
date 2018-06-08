import configureStore from 'redux-mock-store'
import { login, logout, updateUser, handleError } from './actions'

const mockStore = configureStore()

describe('Application Actions', () => {
  describe('USER_LOGIN', () => {
    it('should dispatch an action of type USER_LOGIN with a single string as the payload', () => {
      const store = mockStore({})
      store.dispatch(login('abc123'))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'USER_LOGIN',
        payload: 'abc123',
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch an action of type USER_LOGIN with a single string as the payload', () => {
      const store = mockStore({})
      store.dispatch(login(123))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'USER_LOGIN',
        payload: '123',
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch an action of type USER_LOGIN with a single string as the payload', () => {
      const store = mockStore({})
      store.dispatch(login(null))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'USER_LOGIN',
        payload: 'null',
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })

    it('should dispatch an action of type USER_LOGIN with a single string as the payload', () => {
      const store = mockStore({})
      store.dispatch(login(undefined))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'USER_LOGIN',
        payload: 'undefined',
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })
  })

  describe('USER_LOGOUT', () => {
    it('should dispatch an action of type USER_LOGOUT and no payload', () => {
      const store = mockStore({})
      store.dispatch(logout())
      const actions = store.getActions()
      const expectedPayload = { type: 'USER_LOGOUT', error: false }
      expect(actions).toEqual([expectedPayload])
    })
  })

  describe('USER_UPDATE', () => {
    it('should dispatch an action of type USER_UPDATE with a user object passed through', () => {
      const userStub = {
        results: {
          name: {
            title: 'mr',
            first: 'joe',
            last: 'smith'
          }
        },
        info: {
          seed: 'ab69654e292957ee2d1a52de099a1660',
          results: 1,
          page: 1,
          version: '1.1'
        }
      }
      const store = mockStore({})
      store.dispatch(updateUser(userStub))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'USER_UPDATE',
        payload: userStub,
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })
  })

  describe('HANDLE_ERROR', () => {
    it('should dispatch an action of type HANDLE_ERROR with an error message as the payload', () => {
      const errorMessage = 'You found an error!'
      const store = mockStore({})
      store.dispatch(handleError(errorMessage))
      const actions = store.getActions()
      const expectedPayload = {
        type: 'HANDLE_ERROR',
        payload: errorMessage,
        error: false
      }
      expect(actions).toEqual([expectedPayload])
    })
  })
})
