// // import { injectReducer, injectSaga } from 'store'
// // import reducer from './reducers'
// // import saga from './sagas'
// import { showBreadcrumbSearch } from './actions'
//
// import CloudcastContainer from './CloudcastContainer'
//
// export default (store) => {
//   // injectReducer(store, { key: 'cloudcastState', reducer })
//   // injectSaga('cloudcast', saga)
//
//   return {
//     path: ':cloudcastId',
//     indexRoute: {
//       component: CloudcastContainer,
//       onEnter: (nextState, replace, callback) => {
//         const accountId = nextState.params.accountId
//         console.log('cloudcastId = ', accountId)
//         store.dispatch(showBreadcrumbSearch())
//         callback()
//       }
//     }
//   }
// }
