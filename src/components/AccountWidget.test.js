import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import AccountWidget from './AccountWidget'

it('matches a previous snapshot', () => {
  const component = renderer.create(<AccountWidget />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the account widget', () => {
  const wrapper = shallow(<AccountWidget />)
  expect(wrapper).toMatchSnapshot()
})
