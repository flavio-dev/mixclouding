import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

export const Root = ({ history, routes, store }) => (
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>
)

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default Root
