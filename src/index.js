import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createHashHistory'

import Root from './Root'
import createStore from './store'
import { createSelectLocationState } from './utils/immutableReactRouterRedux'

// ========================================================
// Browser History Setup
// ========================================================
const hashHistory = useRouterHistory(createHistory)({
  basename: ''
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, hashHistory)
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: createSelectLocationState('routing')
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (window.devToolsExtension) {
  window.devToolsExtension.open()
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <Root
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  )
}

// ========================================================
// Go!
// ========================================================
render()
