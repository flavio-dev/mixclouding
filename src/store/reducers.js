import { combineReducers } from 'redux-immutable'
import appReducer from 'app/reducers'
import cloudcastReducer from 'routes/cloudcast/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducer,
    cloudcastReducer,
    ...asyncReducers
  })
}

// export const injectReducer = (store, { key, reducer }) => {
//   if (!store.asyncReducers[key]) {
//     store.asyncReducers[key] = reducer
//     store.replaceReducer(makeRootReducer(store.asyncReducers))
//   }
// }
//
// export default injectReducer
