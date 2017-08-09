import { CONNECTING } from 'store/actions'

const initialState = {}

export const cloudcastConnectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTING:
      console.log('THIS IS A TEST TO SEE IF I RECEIVE THAT CONNECTING = ', action)
      return state
    default:
      return state
  }
}

export default cloudcastConnectionReducer
