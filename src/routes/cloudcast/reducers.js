import { SET_CLOUDCAST_ID } from './actions'

const initialState = ''
export const cloudcastReducer = (state = initialState, action) => {
  console.log('in cloudcast reducer action = ', action)
  switch (action.type) {
    case SET_CLOUDCAST_ID:
      console.log('catching the SET_CLOUDCAST_ID and returning a new state')
      return action.cloudcastId
    default:
      return state
  }
}

export default cloudcastReducer
