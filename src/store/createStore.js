import Immutable from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'
import { makeRootReducer } from './reducers'
import { rootSaga, sagaMiddleware } from './sagas'

export default (initialState = Immutable.Map(), history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [sagaMiddleware, routerMiddleware(history)]

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(...middleware)
  )
  store.asyncReducers = {}

  // ========================================================
  // Saga Setup
  // ========================================================
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
