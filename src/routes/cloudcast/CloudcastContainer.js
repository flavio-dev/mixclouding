import { connect } from 'react-redux'

import Cloudcast from './Cloudcast'

// const mapActionCreators = {
//
// }

const mapStateToProps = (state) => ({
  whole: state
})

export default connect(mapStateToProps)(Cloudcast)
