import { connect } from 'react-redux'

import Cloudcast from './Cloudcast'
import { setCloudcastId } from './actions'
import { getMessages } from './selectors'
import { setConnection, sendMessage } from 'store/actions'

const mapActionCreators = (dispatch) => ({
  setCloudcastId: (ccId) => {
    dispatch(setCloudcastId(ccId))
  },
  setConnection: (url, id) => {
    dispatch(setConnection(url, id))
  },
  sendMessage: (message, from, to) => {
    dispatch(sendMessage(message, from, to))
  }
})

const mapStateToProps = (state) => ({
  messages: getMessages(state)
})

export default connect(mapStateToProps, mapActionCreators)(Cloudcast)
