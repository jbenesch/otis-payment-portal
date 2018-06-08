import React from 'react'
import { select } from '@storybook/addon-knobs'
import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`

const Device = styled.div`
  box-shadow: 0px 2px 10px rgba(200,200,200,1);
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  box-sizing: content-box;
  overflow: auto;
  background: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
`

const DeviceSizeMapping = {
  galaxy: [360,640],
  nexus: [412,732],
  iphone5: [320,568],
  iphone6: [375,667],
  iphone6p: [414,736],
  ipad: [768,1024],
  ipadp: [1024,1366]
}

const MobileLayout = ({ children }) => {
  const size = select('Device', {
    galaxy: 'Galaxy S5',
    nexus: 'Nexus',
    iphone5: 'iPhone 5',
    iphone6: 'iPhone 6',
    iphone6p: 'iPhone 6 Plus',
    ipad: 'iPad',
    ipadp: 'iPad Pro'
  }, 'iphone5')

  return (
    <Center>
      <Device width={DeviceSizeMapping[size][0]} height={DeviceSizeMapping[size][1]}>
        {children({
          width: DeviceSizeMapping[size][0],
          height: DeviceSizeMapping[size][1],
        })}
      </Device>
    </Center>
  )
}

export default MobileLayout
