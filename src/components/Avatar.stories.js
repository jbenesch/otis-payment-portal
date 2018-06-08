import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import MobileLayout from '../../.storybook/Mobile'
import Avatar from './Avatar'

const AvatarStory = storiesOf('Avatar', module)

AvatarStory.addDecorator(withKnobs)

const Row = styled.div`
  margin: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`

AvatarStory.add('Desktop', () => {
  const src = text(
    'Image Src',
    'https://randomuser.me/api/portraits/men/51.jpg'
  )
  const size = select(
    'Size',
    {
      large: 'large',
      medium: 'medium',
      small: 'small'
    },
    'large'
  )

  return (
    <Row>
      <Avatar src={src} size={size} style={{ marginRight: 20 }} />
      <Avatar src={src} size="large" style={{ marginRight: 20 }} />
      <Avatar src={src} size="medium" style={{ marginRight: 20 }} />
      <Avatar src={src} size="small" />
    </Row>
  )
})

AvatarStory.add('Mobile', () => {
  const src = text(
    'Image Src',
    'https://randomuser.me/api/portraits/men/51.jpg'
  )
  const size = select(
    'Size',
    {
      large: 'large',
      medium: 'medium',
      small: 'small'
    },
    'medium'
  )

  return (
    <MobileLayout>
      {() => (
        <div style={{ margin: '20px', float: 'right' }}>
          <Avatar src={src} size={size} />
        </div>
      )}
    </MobileLayout>
  )
})
