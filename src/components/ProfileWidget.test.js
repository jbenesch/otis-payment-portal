import React from 'react';
import renderer from 'react-test-renderer';
import ProfileWidget from './ProfileWidget';

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <ProfileWidget
      firstName="Joe"
      avatar="https://randomuser.me/api/portraits/men/51.jpg"
      username="joesmith"
      phone="(321) 321-4321"
      address="1234 Main Street"
      city="San Diego"
      state="CA"
      zip="92101"
      registered="2010-09-24 02:10:42"
      dob="1983-07-14 07:29:45"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
