import {
  // connected,
  connecting,
  disconnected,
  messageReceivedForAll,
  SET_CONNECTION,
  SEND_CHAT_MESSAGE,
  MESSAGE_TO_ALL
} from './actions'

const socketMiddleware = (function() {
  var socket = null

  // const onOpen = (ws, store, token) => evt => {
  //   // Send a handshake, or authenticate with remote end
  //
  //   // Tell the store we're connected
  //   store.dispatch(connected())
  // }
  //
  // const onClose = (ws, store) => evt => {
  //   // Tell the store we've disconnected
  //   store.dispatch(disconnected())
  // }

  const onMessage = (ws, store) => evt => {
    // Parse the JSON message received on the websocket
    var msg = JSON.parse(evt.data)
    console.log('receiving in the middleware the msg that is  = ', msg)
    switch (msg.to) {
      case MESSAGE_TO_ALL:
        // Dispatch an action that adds the received message to our state
        store.dispatch(messageReceivedForAll(msg))
        break
      default:
        console.log('Received unknown message type: ' + msg.type)
        break
    }
  }

  return store => next => action => {
    switch (action.type) {
      // The user wants us to connect
      case SET_CONNECTION:
        // Start a new connection to the server
        if (socket !== null) {
          socket.close()
        }
        // Send an action that shows a 'connecting...' status for now
        store.dispatch(connecting())

        // Attempt to connect (we could send a 'failed' action on error)
        socket = new WebSocket(action.url)
        socket.onmessage = onMessage(socket, store)

        return true

      // The user wants us to disconnect
      case 'DISCONNECT':
        if (socket !== null) {
          socket.close()
        }
        socket = null

        // Set our state to disconnected
        store.dispatch(disconnected())
        return true

      // Send the 'SEND_MESSAGE' action down the websocket to the server
      case SEND_CHAT_MESSAGE:
        console.log('sending action = ', action)
        socket.send(JSON.stringify(action))
        return true

      // This action is irrelevant to us, pass it on to the next middleware
      default:
        return next(action)
    }
  }
})()

export default socketMiddleware
