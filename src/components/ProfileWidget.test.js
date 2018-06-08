import React from 'react'
import { render } from 'enzyme'
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
  const dom = render(
    <Provider store={store}>
      <ConnectedProfileWidget />
    </Provider>
  )
  expect(dom).toMatchSnapshot()
})
