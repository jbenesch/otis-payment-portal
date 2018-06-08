import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './Avatar';

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" size="large" />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
