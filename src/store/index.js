import createStore from './createStore'
import injectReducer from './reducers'
import injectSaga from './sagas'
import { getApp, getPathname } from './selectors'

export {
  injectReducer,
  injectSaga,
  getApp,
  getPathname
}

export default createStore
