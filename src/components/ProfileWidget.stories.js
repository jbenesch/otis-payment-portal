import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MobileLayout from '../../.storybook/Mobile'
import ProfileWidget from './ProfileWidget'

const ProfileWidgetStory = storiesOf('Profile Widget', module)
const mockStore = configureStore([])
const store = mockStore({
  user: {
    isLoading: false,
    name: {
      title: 'mr',
      first: 'romain',
      last: 'hoogmoed'
    },
    login: {
      username: 'lazyduck408'
    },
    phone: '(321) 321-4321',
    location: {
      street: '1861 jan pieterszoon coenstraat',
      city: 'maasdriel',
      state: 'zeeland',
      postcode: '69217'
    },
    dob: '1983-07-14 07:29:45',
    registered: '2010-09-24 02:10:42',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
  }
})

ProfileWidgetStory.add('Desktop', () => (
  <div style={{ margin: '50px' }}>
    <Provider store={store}>
      <ProfileWidget />
    </Provider>
  </div>
))

ProfileWidgetStory.add('Mobile', () => (
  <MobileLayout>
    {() => (
      <div style={{ float: 'right', margin: 10 }}>
        <Provider store={store}>
          <ProfileWidget />
        </Provider>
      </div>
    )}
  </MobileLayout>
))
