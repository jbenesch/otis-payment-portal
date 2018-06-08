import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Avatar from './Avatar'

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" size="large" />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
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
