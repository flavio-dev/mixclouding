import Immutable from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = Immutable.Map({ locationBeforeTransitions: { pathname: '/' } })
export const immutableRouterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload)
    default:
      return state
  }
}

export const createSelectLocationState = (stateKey) => {
  let prevRoutingState, prevRoutingStateJS

  return (state) => {
    const routingState = state.get(stateKey)

    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export default immutableRouterReducer
