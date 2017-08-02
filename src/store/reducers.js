import { combineReducers } from 'redux-immutable'
import appReducer from 'app/reducers'
import cloudcastReducers from 'routes/cloudcast/reducers/index'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    appReducer,
    cloudcastReducers,
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
