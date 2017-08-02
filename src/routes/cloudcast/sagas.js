import { take, call } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { SET_CLOUDCAST_ID } from './actions'

export function* getCloudcast(cloudcastId) {
  // const url = 'https://www.mixcloud.com/player/details/?key=' + cloudcastId +
  //   '&access_token=cGnXAfusxX7edWwH6FwcK3Vc9AxWPxjP'
  const url = 'https://waveform.mixcloud.com/a/a/1/a/c13a-7a56-4768-ab01-b24b2c0b86e3.json?v=0.1'

  // const url = 'https://waveform.mixcloud.com/a/f/d/d/3e9c-7dab-4a0f-a5d7-0b336122a336.json?v=0.1'
  // const url = 'https://api.mixcloud.com/spartacus/party-time/'
  console.log(url)
  whatwgFetch(url).then(function(response) {
    return response.text()
  }).then(function(body) {
    console.log(JSON.parse(body))
  })
}

export function* watchSetCloudcastId() {
  while (true) {
    const payload = yield take(SET_CLOUDCAST_ID)
    yield call(getCloudcast, payload.cloudcastId)
  }
}
