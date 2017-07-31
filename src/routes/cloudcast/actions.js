export const SET_CLOUDCAST_ID = 'SET_CLOUDCAST_ID'

export const setCloudcastId = (cloudcastId) => {
  console.log('come one!!!!!cloudcastId = ', cloudcastId)
  return {
    type: SET_CLOUDCAST_ID,
    cloudcastId
  }
}
