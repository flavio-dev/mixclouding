import cloudcast from './cloudcast'
import PageNotFound from './PageNotFound'
import { getPath } from '~/app'
import App from './App'

export const createRoutes = store => ({
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState, replace) => replace(getPath(store.getState()))
  },
  childRoutes: [cloudcast(store), { path: '*', component: PageNotFound }]
})

export default createRoutes
