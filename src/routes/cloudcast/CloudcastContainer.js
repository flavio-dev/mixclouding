import { connect } from 'react-redux'

import Cloudcast from './Cloudcast'
import { setCloudcastId } from './actions'

const mapActionCreators = (dispatch) => ({
  setCloudcastId: (ccId) => {
    dispatch(setCloudcastId(ccId))
  }
})

const mapStateToProps = (state) => ({
  test: 'testcdscjos'
})

export default connect(mapStateToProps, mapActionCreators)(Cloudcast)
