import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import logo from './logo.svg'
import styles from './App.css'

class App extends Component {
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
