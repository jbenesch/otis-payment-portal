import React from 'react'
import { render } from 'enzyme'
import Widget from './Widget'

it('matches a previous snapshot', () => {
  const dom = render(<Widget />)
  expect(dom).toMatchSnapshot()
})
