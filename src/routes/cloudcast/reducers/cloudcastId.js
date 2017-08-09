import { SET_CLOUDCAST_ID } from '../actions'

const initialState = ''
export const cloudcastIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLOUDCAST_ID:
      return action.cloudcastId
    default:
      return state
  }
}

export default cloudcastIdReducer
