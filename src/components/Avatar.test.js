import React from 'react'
import { shallow, render } from 'enzyme'
import Avatar from './Avatar'

it('matches a previous snapshot', () => {
  const dom = render(
    <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" size="large" />
  )
  expect(dom).toMatchSnapshot()
})

it('should default to large size', () => {
  const wrapper = shallow(
    <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
  )
  expect(wrapper.prop('size')).toEqual('medium')
})

it('should render a avatar component', () => {
  const wrapper = shallow(
    <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" />
  )
  expect(wrapper).toMatchSnapshot()
})
