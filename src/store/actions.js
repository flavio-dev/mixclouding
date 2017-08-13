export const DISCONNECTED = 'DISCONNECTED'
export const CONNECTING = 'CONNECTING'
export const CONNECTED = 'CONNECTED'
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE'
export const MESSAGE_TO_ALL = 'MESSAGE_TO_ALL'
export const MESSAGE_RECEIVED_FOR_ALL = 'MESSAGE_RECEIVED_FOR_ALL'

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

export const messageReceivedForAll = (msg) => ({
  type: MESSAGE_RECEIVED_FOR_ALL,
  message: msg
})

export const setConnection = (url, id) => {
  return {
    type: SET_CONNECTION,
    url,
    id
  }
}

export const sendMessage = (message, from, to) => {
  return {
    type: SEND_CHAT_MESSAGE,
    message,
    from,
    to
  }
}
