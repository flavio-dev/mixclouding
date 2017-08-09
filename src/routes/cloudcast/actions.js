export const SET_CLOUDCAST_ID = 'SET_CLOUDCAST_ID'
// export const SET_CONNECTION = 'SET_CONNECTION'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export const setCloudcastId = (cloudcastId) => {
  return {
    type: SET_CLOUDCAST_ID,
    cloudcastId
  }
}

// export const setConnection = (url) => {
//   console.log('come one!!!!!setConnection = ', url)
//   return {
//     type: SET_CONNECTION,
//     url
//   }
// }

export const sendMessage = (to, message) => {
  // console.log('come one!!!!!sendMessage = ', message)
  return {
    type: SEND_MESSAGE,
    to,
    message
  }
}
