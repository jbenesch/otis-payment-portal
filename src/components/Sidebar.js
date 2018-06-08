import React from 'react'
import { Link } from 'redux-little-router'
import styled from 'styled-components'
import { Colors, Icon } from '@blueprintjs/core'

const MenuListItem = styled.li`
  list-style: none;
  padding: 0;
  & > a {
    color: ${Colors.GRAY1} !important;
    font-size: 1.2em;
    width: 100%;
    display: inline-block;
    padding: 20px 0 20px 10px;
  }
  & > .active {
    color: ${Colors.LIGHT_GRAY1} !important;
  }
  & > a:hover {
    color: ${Colors.LIGHT_GRAY1} !important;
    text-decoration: none;
  }
`

const Sidebar = () => (
  <ul style={{ paddingLeft: 0, marginTop: 0 }}>
    <MenuListItem>
      <Link href="/" activeProps={{ className: 'active' }}>
        <Icon
          icon="dashboard"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        My Dashboard
      </Link>
    </MenuListItem>
    <MenuListItem>
      <Link href="/account" activeProps={{ className: 'active' }}>
        <Icon
          icon="bank-account"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        Account
      </Link>
    </MenuListItem>
    <MenuListItem>
      <Link href="/mobile" activeProps={{ className: 'active' }}>
        <Icon
          icon="mobile-phone"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        Mobile
      </Link>
    </MenuListItem>
    <MenuListItem>
      <Link href="/bills" activeProps={{ className: 'active' }}>
        <Icon
          icon="dollar"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        Bills
      </Link>
    </MenuListItem>
    <MenuListItem>
      <Link href="/complaints" activeProps={{ className: 'active' }}>
        <Icon
          icon="chat"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        Complaints
      </Link>
    </MenuListItem>
    <MenuListItem>
      <Link href="/support" activeProps={{ className: 'active' }}>
        <Icon
          icon="phone"
          iconSize={Icon.SIZE_LARGE}
          style={{ marginRight: 10 }}
        />{' '}
        Customer Care
      </Link>
    </MenuListItem>
  </ul>
)

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar
