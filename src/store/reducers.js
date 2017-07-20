import { combineReducers } from 'redux-immutable'

import { reducers as app } from '~/app'
import routing from 'utils/immutableReactRouterRedux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    app,
    routing,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default injectReducer
