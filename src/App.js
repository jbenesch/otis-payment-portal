import React from 'react'
import { Fragment } from 'redux-little-router'
import * as Routes from './routes'

import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Mobile from './pages/Mobile'
import Bills from './pages/Bills'
import Complaints from './pages/Complaints'
import Support from './pages/Support'
import NoMatch from './pages/NoMatch'

const App = () => (
  <Fragment forRoute="/">
    <div>
      <Fragment key={`/${Routes.LOGIN}`} forRoute={`/${Routes.LOGIN}`}>
        <LoginPage />
      </Fragment>
      <Fragment key={`/${Routes.ACCOUNT}`} forRoute={`/${Routes.ACCOUNT}`}>
        <Account />
      </Fragment>
      <Fragment key={`/${Routes.MOBILE}`} forRoute={`/${Routes.MOBILE}`}>
        <Mobile />
      </Fragment>
      <Fragment key={`/${Routes.BILLS}`} forRoute={`/${Routes.BILLS}`}>
        <Bills />
      </Fragment>
      <Fragment
        key={`/${Routes.COMPLAINTS}`}
        forRoute={`/${Routes.COMPLAINTS}`}
      >
        <Complaints />
      </Fragment>
      <Fragment key={`/${Routes.SUPPORT}`} forRoute={`/${Routes.SUPPORT}`}>
        <Support />
      </Fragment>
      <Fragment key="/" forRoute="/">
        <Dashboard />
      </Fragment>
      <Fragment forNoMatch>
        <NoMatch />
      </Fragment>
    </div>
  </Fragment>
)

App.propTypes = {}

App.defaultProps = {}

export default App
