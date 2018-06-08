import React from 'react';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import AccountMenu from './AccountMenu';

it("renders the user's first name", () => {
  const wrapper = shallow(
    <AccountMenu
      firstName="Joe"
      avatar="https://randomuser.me/api/portraits/men/51.jpg"
    />
  );
  expect(wrapper.find('b').text()).toEqual('Joe');
});

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <AccountMenu
      firstName="Joe"
      avatar="https://randomuser.me/api/portraits/men/51.jpg"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
