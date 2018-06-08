import React from 'react'
import renderer from 'react-test-renderer'
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
  const component = renderer.create(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
