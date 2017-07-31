import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cloudcast extends Component {
  componentWillMount() {
    this.props.setCloudcastId(this.props.match.params.cloudcastId)
  }

  render() {
    return <div>hello {this.props.match.params.cloudcastId} {this.props.test}</div>
  }
}

Cloudcast.propTypes = {
  match: PropTypes.object,
  test: PropTypes.string,
  setCloudcastId: PropTypes.func
}

export default Cloudcast
