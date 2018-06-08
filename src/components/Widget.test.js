import React from 'react'
import renderer from 'react-test-renderer'
import Widget from './Widget'

it('matches a previous snapshot', () => {
  const component = renderer.create(<Widget />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
