import React from 'react'
import PropTypes from 'prop-types'

export const Cloudcast = ({ match, test, setCloudcastId }) => {
  return <div onClick={() => setCloudcastId(match.params.cloudcastId)}>hello {match.params.cloudcastId} {test}</div>
}

Cloudcast.propTypes = {
  match: PropTypes.object,
  test: PropTypes.string,
  setCloudcastId: PropTypes.func
}

export default Cloudcast
