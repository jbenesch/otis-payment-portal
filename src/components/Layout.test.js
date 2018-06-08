import React from 'react'
import { shallow, render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Layout from './Layout'

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
  window.matchMedia = jest.fn(() => ({
    matches: true,
    addListener: jest.fn()
  }))
  const dom = render(
    <Provider store={store}>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </Provider>
  )
  expect(dom).toMatchSnapshot()
})

it('should render the layout', () => {
  window.matchMedia = jest.fn(() => ({
    matches: true,
    addListener: jest.fn()
  }))
  const wrapper = shallow(
    <Provider store={store}>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </Provider>
  )
  expect(wrapper).toMatchSnapshot()
})

it('should contain hello world in viewport', () => {
  window.matchMedia = jest.fn(() => ({
    matches: true,
    addListener: jest.fn()
  }))
  const wrapper = shallow(
    <Provider store={store}>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </Provider>
  )
  expect(wrapper.contains(<h1>Hello World</h1>)).toEqual(true)
})
