import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cloudcast extends Component {
  componentWillMount() {
    this.props.setCloudcastId(this.props.match.params.cloudcastId)
  }

  componentDidMount() {
    console.log('blabla throwing that setConnection')
    this.props.setConnection('ws:localhost:4000')

    setInterval(_ => {
      this.props.sendMessage('the message')
    }, 2000)
  }

  render() {
    return <div>hello {this.props.match.params.cloudcastId} {this.props.test}</div>
  }
}

Cloudcast.propTypes = {
  match: PropTypes.object,
  test: PropTypes.string,
  setCloudcastId: PropTypes.func,
  setConnection: PropTypes.func,
  sendMessage: PropTypes.func
}

export default Cloudcast
