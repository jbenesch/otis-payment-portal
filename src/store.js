import { createStore, compose, applyMiddleware } from 'redux'
import { initializeCurrentLocation } from 'redux-little-router'
import createSagaMiddleware from 'redux-saga'

import {
  enhancer as routerEnhancer,
  middleware as routerMiddleware
} from './routes'
import reducer from './reducer'
import rootSaga from './sagas'

/** @see https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(
    routerEnhancer,
    applyMiddleware(routerMiddleware, sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

const routerState = store.getState().router
if (routerState) {
  store.dispatch(initializeCurrentLocation(routerState))
}

export default store
