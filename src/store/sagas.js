import createSagaMiddleware from 'redux-saga'
// import { call } from 'redux-saga/effects'

export const sagaMiddleware = createSagaMiddleware()
// let dynamicSagaIds = {}

export function* rootSaga() {
  console.log('into the rootSaga')
  // yield call(appFlow)
}

// export const injectSaga = (sagaId, saga, ...args) => {
//   if (!sagaId || !dynamicSagaIds[sagaId]) {
//     dynamicSagaIds[sagaId] = saga
//     sagaMiddleware.run(saga, ...args)
//   }
// }

// export default injectSaga
