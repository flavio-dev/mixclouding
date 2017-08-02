import { combineReducers } from 'redux-immutable'

import { cloudcastIdReducer } from './cloudcastId'
import { cloudcastDataReducer } from './cloudcastData'

export default combineReducers({
  cloudcastId: cloudcastIdReducer,
  cloudcastData: cloudcastDataReducer
})
