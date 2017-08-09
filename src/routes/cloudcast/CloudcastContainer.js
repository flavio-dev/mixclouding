import { connect } from 'react-redux'

import Cloudcast from './Cloudcast'
import { setCloudcastId } from './actions'
import { setConnection, sendMessage } from 'store/actions'

const mapActionCreators = (dispatch) => ({
  setCloudcastId: (ccId) => {
    dispatch(setCloudcastId(ccId))
  },
  setConnection: (url) => {
    dispatch(setConnection(url))
  },
  sendMessage: (message) => {
    dispatch(sendMessage(message))
  }
})

const mapStateToProps = (state) => ({
  test: 'testcdscjos'
})

export default connect(mapStateToProps, mapActionCreators)(Cloudcast)
