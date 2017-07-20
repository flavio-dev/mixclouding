import { getApp } from '~/store'

export const getPath = state => getApp(state).get('path')
