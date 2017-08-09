import { combineReducers } from 'redux-immutable'

import { cloudcastIdReducer } from './cloudcastId'
import { cloudcastDataReducer } from './cloudcastData'
import { cloudcastConnectionReducer } from './cloudcastConnection'

export default combineReducers({
  cloudcastId: cloudcastIdReducer,
  cloudcastData: cloudcastDataReducer,
  cloudcastConnection: cloudcastConnectionReducer
})
