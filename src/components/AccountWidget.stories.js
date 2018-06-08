import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import MobileLayout from '../../.storybook/Mobile'
import AccountWidget from './AccountWidget'

const AccountWidgetStory = storiesOf('Account Widget', module)

AccountWidgetStory.addDecorator(withKnobs)

AccountWidgetStory.add('Desktop', () => (
  <div style={{ margin: '50px' }}>
    <AccountWidget />
  </div>
))

AccountWidgetStory.add('Mobile', () => (
  <MobileLayout>{() => <AccountWidget />}</MobileLayout>
))
