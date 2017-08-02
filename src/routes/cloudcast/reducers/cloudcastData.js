import Immutable from 'immutable'

const initialState = Immutable.Map()

export const cloudcastDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default cloudcastDataReducer
