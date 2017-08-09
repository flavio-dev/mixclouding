import { take, call } from 'redux-saga/effects'

import { SEND_MESSAGE } from '../actions'

export function* sendMessage(to, message) {
  console.log('balbla')
}

export function* watchSendMessage() {
  while (true) {
    const payload = yield take(SEND_MESSAGE)
    yield call(sendMessage, payload.to, payload.message)
  }
}
