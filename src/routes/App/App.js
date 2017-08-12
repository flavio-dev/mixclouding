import React, { Component } from 'react'
import whatwgFetch from 'utils/fetch'
// import Websocket from 'react-websocket';

// import PropTypes from 'prop-types'
import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
  componentDidMount() {
  //   // this is an "echo" websocket service for testing pusposes
  //   // const host = window.location.host
  //   // const protocol = (window.location.protocol === 'https:') ? 'wss:' : 'ws:'
  //   this.connection = new WebSocket('ws:localhost:4000')
  //   // listen to onmessage event
  //   this.connection.onmessage = message => {
  //   // add the new message to state
  //     console.log('message is here ', JSON.parse(message.data))
  //   }
  //
  //   // for testing: sending a message to the echo service every 2 seconds,
  //   // the service sends it right back
  //   setInterval(_ => {
  //     this.connection.send(JSON.stringify({
  //       bla: 'blabalbbla'
  //     }))
  //   }, 2000)
  //
    whatwgFetch('http://localhost:4000/test/').then(function(response) {
      return response.text()
    }).then(function(body) {
      console.log(JSON.parse(body))
    })
  }

  handleData(data) {
    // let result = JSON.parse(data)
    // console.log('data returned is ', result)
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <h2>Welcome to React cdfc</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
