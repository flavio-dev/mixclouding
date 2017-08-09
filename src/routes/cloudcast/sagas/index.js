import { fork } from 'redux-saga/effects'

import { watchSetCloudcastId } from './watchCloudcastId'

export function* watchCloudcasts() {
  yield fork(watchSetCloudcastId)
}

export default watchCloudcasts
