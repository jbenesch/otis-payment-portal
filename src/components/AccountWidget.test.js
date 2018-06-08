import React from 'react'
import { shallow, render } from 'enzyme'
import AccountWidget from './AccountWidget'

it('matches a previous snapshot', () => {
  const dom = render(<AccountWidget />)
  expect(dom).toMatchSnapshot()
})

it('should render the account widget', () => {
  const wrapper = shallow(<AccountWidget />)
  expect(wrapper).toMatchSnapshot()
})
