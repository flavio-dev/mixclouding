import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cloudcast extends Component {
  componentWillMount() {
    this.props.setCloudcastId('/' +
      this.props.match.params.cloudcastArtist + '/' +
      this.props.match.params.cloudcastKey
    )
  }

  render() {
    return <div>hello {this.props.match.params.cloudcastArtist} {this.props.test}</div>
  }
}

Cloudcast.propTypes = {
  match: PropTypes.object,
  test: PropTypes.string,
  setCloudcastId: PropTypes.func
}

export default Cloudcast
