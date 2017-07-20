export const getApp = state => state.get('app')
export const getPathname = state => state.get('routing').get('locationBeforeTransitions').pathname
