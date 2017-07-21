import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from 'routes/App'
import CloudcastContainer from 'routes/cloudcast/CloudcastContainer'

export const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/:cloudcastId' component={CloudcastContainer} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
