import { LOCATION_CHANGE } from 'react-router-redux'
import { SET_LIST_CLIENTS } from 'app/actions'

const initialState = []
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state
    case SET_LIST_CLIENTS:
      console.log('SET_LIST_CLIENTS action = ', action)
      return action.listUsers
    default:
      return state
  }
}

export default appReducer
