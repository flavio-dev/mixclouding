import { take, call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { SET_CLOUDCAST_ID } from '../actions'
import { setListClients } from 'app/actions'

export function* getCloudcast(cloudcastId) {
  // const url = 'https://www.mixcloud.com/player/details/?key=' + cloudcastId +
  //   '&access_token=cGnXAfusxX7edWwH6FwcK3Vc9AxWPxjP'
  // const url = 'https://waveform.mixcloud.com/a/a/1/a/c13a-7a56-4768-ab01-b24b2c0b86e3.json?v=0.1'

  const url = 'http://localhost:4000/users/'
  const list = yield call(whatwgFetch, url)

  yield put(setListClients(list))
}

export function* watchSetCloudcastId() {
  while (true) {
    const payload = yield take(SET_CLOUDCAST_ID)
    yield call(getCloudcast, payload.cloudcastId)
  }
}
