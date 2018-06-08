import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import MobileLayout from '../../.storybook/Mobile'
import { ProfileWidget } from './ProfileWidget'

const ProfileWidgetStory = storiesOf('Profile Widget', module)

ProfileWidgetStory.addDecorator(withKnobs)

ProfileWidgetStory.add('Desktop', () => {
  const firstName = text('First Name', 'Joe')
  const avatar = text(
    'Avatar',
    'https://randomuser.me/api/portraits/men/51.jpg'
  )
  const username = text('Username', 'joesmith')
  const phone = text('Phone', '(321) 321-4321')
  const address = text('Address', '1234 Main Street')
  const city = text('City', 'San Diego')
  const state = text('State', 'CA')
  const zip = text('Zip Code', '92101')
  const registered = text('Registered', '2010-09-24 02:10:42')
  const dob = text('Birthday', '1983-07-14 07:29:45')

  return (
    <div style={{ margin: '50px' }}>
      <ProfileWidget
        firstName={firstName}
        avatar={avatar}
        username={username}
        phone={phone}
        address={address}
        city={city}
        state={state}
        zip={zip}
        registered={registered}
        dob={dob}
      />
    </div>
  )
})

ProfileWidgetStory.add('Mobile', () => {
  const firstName = text('First Name', 'Joe')
  const avatar = text(
    'Avatar',
    'https://randomuser.me/api/portraits/men/51.jpg'
  )
  const username = text('Username', 'joesmith')
  const phone = text('Phone', '(321) 321-4321')
  const address = text('Address', '1234 Main Street')
  const city = text('City', 'San Diego')
  const state = text('State', 'CA')
  const zip = text('Zip Code', '92101')
  const registered = text('Registered', '2010-09-24 02:10:42')
  const dob = text('Birthday', '1983-07-14 07:29:45')

  return (
    <MobileLayout>
      {() => (
        <div style={{ float: 'right', margin: 10 }}>
          <ProfileWidget
            firstName={firstName}
            avatar={avatar}
            username={username}
            phone={phone}
            address={address}
            city={city}
            state={state}
            zip={zip}
            registered={registered}
            dob={dob}
          />
        </div>
      )}
    </MobileLayout>
  )
})
