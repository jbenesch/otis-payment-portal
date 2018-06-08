import { combineReducers } from 'redux'
import { createReducer } from 'redux-act'
import { reducer as formReducer } from 'redux-form'
import { reducer as routerReducer } from './routes'
import * as actions from './actions'

export const user = createReducer(
  {
    [actions.updateUser]: (state, { results, info }) => ({
      ...state,
      ...results,
      info: {
        ...state.info,
        ...info
      },
      isLoading: false
    })
  },
  {
    isLoading: true
  }
)

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  user
})
