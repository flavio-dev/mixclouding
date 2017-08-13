import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MESSAGE_TO_ALL } from 'store/actions'

class Cloudcast extends Component {
  constructor(props) {
    super(props)
    this.id = ''
    console.log('this.props.messages = ', this.props.messages)
    this.state = {
      messages: this.props.messages
    }
  }

  componentWillMount() {
    this.props.setCloudcastId(this.props.match.params.cloudcastId)
    this.id = this.props.match.params.cloudcastId
  }

  componentDidMount() {
    this.props.setConnection('ws:localhost:4000', this.id)
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.messages = ', nextProps.messages)
    this.setState({messages: nextProps.messages})
  }

  sendMessage = () => {
    this.props.sendMessage('the message', this.id, MESSAGE_TO_ALL)
  }

  render() {
    return (
      <div>
        <span>hello {this.props.match.params.cloudcastId}</span>
        <h1>FORUM</h1>
        {this.state.messages.map((message, index) => {
          return (
            <div key={index}>
              <span>FROM: {message.from}</span>
              <p>Message: {message.message}</p>
            </div>
          )
        })}
        <div onClick={this.sendMessage}>BUTTON SEND MESSAGE</div>
      </div>
    )
  }
}

Cloudcast.propTypes = {
  match: PropTypes.object,
  test: PropTypes.string,
  setCloudcastId: PropTypes.func,
  setConnection: PropTypes.func,
  sendMessage: PropTypes.func,
  messages: PropTypes.array
}

export default Cloudcast
