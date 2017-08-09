export const DISCONNECTED = 'DISCONNECTED'
export const CONNECTING = 'CONNECTING'
export const CONNECTED = 'CONNECTED'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE'

export const connected = () => ({
  type: CONNECTED,
  status: 'connected'
})

export const connecting = () => ({
  type: CONNECTING,
  status: 'connecting'
})

export const disconnected = () => ({
  type: DISCONNECTED,
  status: 'disconnected'
})

export const messageReceived = (msg) => ({
  type: MESSAGE_RECEIVED,
  message: msg
})

export const setConnection = (url) => {
  console.log('store action setConnection = ', url)
  return {
    type: SET_CONNECTION,
    url
  }
}

export const sendMessage = (message) => {
  console.log('store action setConnection = ', message)
  return {
    type: SEND_CHAT_MESSAGE,
    message
  }
}
