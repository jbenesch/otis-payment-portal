import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import MobileLayout from '../../.storybook/Mobile'
import Widget from './Widget'

const WidgetStory = storiesOf('Widget', module)

WidgetStory.addDecorator(withKnobs)

WidgetStory.add('Desktop', () => (
  <div style={{ margin: '50px' }}>
    <Widget />
  </div>
))

WidgetStory.add('Mobile', () => <MobileLayout>{() => <Widget />}</MobileLayout>)
