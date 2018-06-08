import React from 'react';
import renderer from 'react-test-renderer';
import AccountWidget from './AccountWidget';

it('matches a previous snapshot', () => {
  const component = renderer.create(<AccountWidget />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
