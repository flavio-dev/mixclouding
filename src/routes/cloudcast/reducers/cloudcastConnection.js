import { CONNECTING, MESSAGE_RECEIVED_FOR_ALL, MESSAGE_TO_ALL } from 'store/actions'

const initialState = [{
  message: 'initial message',
  from: 'BOT',
  to: MESSAGE_TO_ALL
}]

export const cloudcastConnectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTING:
      console.log('THIS IS A TEST TO SEE IF I RECEIVE THAT CONNECTING = ', action)
      return state
    case MESSAGE_RECEIVED_FOR_ALL:
      console.log('action = ', action)
      const bla = [action.message]
      return state.concat(bla)
    default:
      return state
  }
}

export default cloudcastConnectionReducer
