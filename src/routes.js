import { routerForBrowser } from 'redux-little-router'

export const DASHBOARD = 'dashboard'
export const ACCOUNT = 'account'
export const MOBILE = 'mobile'
export const BILLS = 'bills'
export const COMPLAINTS = 'complaints'
export const SUPPORT = 'support'
export const LOGIN = 'login'

export const ROUTES = {
  '/': {
    id: DASHBOARD,
    title: 'My Dashboard - Otis Payment Portal'
  },
  '/account': {
    id: ACCOUNT,
    title: 'My Accounts - Otis Payment Portal'
  },
  '/mobile': {
    id: MOBILE,
    title: 'My Mobile Accounts - Otis Payment Portal'
  },
  '/bills': {
    id: BILLS,
    title: 'My Bills - Otis Payment Portal'
  },
  '/complaints': {
    id: COMPLAINTS,
    title: 'My Complaints - Otis Payment Portal'
  },
  '/support': {
    id: SUPPORT,
    title: 'Otis Customer Support'
  },
  '/login': {
    id: LOGIN,
    title: 'Login to Otis Payment Portal'
  }
}

export const { reducer, enhancer, middleware } = routerForBrowser({
  routes: ROUTES
})
