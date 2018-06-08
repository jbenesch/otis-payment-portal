import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ConnectedAccountMenu, { AccountMenu } from './AccountMenu'

const mockStore = configureStore([])
const store = mockStore({
  user: {
    isLoading: false,
    name: {
      title: 'mr',
      first: 'romain',
      last: 'hoogmoed'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
  }
})

it('should render the account menu', () => {
  const wrapper = shallow(
    <AccountMenu
      firstName="Joe"
      avatar="https://randomuser.me/api/portraits/men/51.jpg"
    />
  )
  expect(wrapper).toMatchSnapshot()
})

it("renders the user's first name", () => {
  const wrapper = shallow(
    <AccountMenu
      firstName="Joe"
      avatar="https://randomuser.me/api/portraits/men/51.jpg"
    />
  )
  expect(wrapper.find('b').text()).toEqual('Joe')
})

it('matches a previous snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <ConnectedAccountMenu />
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
