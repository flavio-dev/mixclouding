import React from 'react'
import PropTypes from 'prop-types'

export const Cloudcast = ({ match }) => {
  return <div>hello {match.params.cloudcastId}</div>
}

Cloudcast.propTypes = {
  match: PropTypes.object
}

export default Cloudcast
