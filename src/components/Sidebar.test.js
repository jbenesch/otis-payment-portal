import React from 'react'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Sidebar from './Sidebar'

const mockStore = configureStore([])
const store = mockStore({
  router: {
    pathname: '/',
    route: '/',
    result: {
      id: 'Dashboard'
    }
  }
})

it('matches a previous snapshot', () => {
  const dom = render(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  )
  expect(dom).toMatchSnapshot()
})
