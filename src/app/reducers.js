import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = 'ckdposkcsko'
export const appReducer = (state = initialState, action) => {
  // console.log('in app reducer action = ', action)
  switch (action.type) {
    case LOCATION_CHANGE:
      // console.log('location changes/??>>?>?>')
      return state
    default:
      // console.log('returnnig state = ', state)
      return state
  }
}

export default appReducer
