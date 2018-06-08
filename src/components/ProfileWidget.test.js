import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ConnectedProfileWidget, { ProfileWidget } from './ProfileWidget'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    isLoading: false,
    name: {
      title: 'mr',
      first: 'romain',
      last: 'hoogmoed'
    },
    dob: '1983-07-14 07:29:45',
    registered: '2010-09-24 02:10:42',
    login: {
      username: 'lazyduck408'
    },
    phone: '(656)-976-4980',
    location: {
      street: '1861 jan pieterszoon coenstraat',
      city: 'San Diego',
      state: 'CA',
      postcode: '69217'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
  }
})

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ConnectedProfileWidget />
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
