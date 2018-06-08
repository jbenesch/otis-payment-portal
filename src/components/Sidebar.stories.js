import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import MobileLayout from '../../.storybook/Mobile'
import Sidebar from './Sidebar'

const SidebarStory = storiesOf('Sidebar', module)
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

SidebarStory.addDecorator(withKnobs)

SidebarStory.add('Desktop', () => (
  <div style={{ margin: '50px' }}>
    <Provider store={store}>
      <Sidebar />
    </Provider>
  </div>
))

SidebarStory.add('Mobile', () => (
  <MobileLayout>
    {() => (
      <Provider store={store}>
        <Sidebar />
      </Provider>
    )}
  </MobileLayout>
))
