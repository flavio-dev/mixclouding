import cloudcast from './cloudcast'
import PageNotFound from './PageNotFound'
import App from './App'

export const createRoutes = store => ({
  path: '/',
  component: App,
  childRoutes: [cloudcast(store), { path: '*', component: PageNotFound }]
})

export default createRoutes
