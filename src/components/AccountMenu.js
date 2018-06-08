import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Icon,
  Menu,
  MenuItem,
  MenuDivider,
  Popover,
  Position
} from '@blueprintjs/core'
import { logout } from '../actions'
import Avatar from './Avatar'

const Profile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  cursor: pointer;
`

export const AccountMenu = ({ firstName, avatar, onEditProfile, onLogout }) => (
  <Popover position={Position.BOTTOM_CENTER}>
    <Profile>
      <Avatar src={avatar} style={{ marginRight: 15 }} />
      <span>
        Hi <b>{firstName}</b>{' '}
        <Icon icon="chevron-down" iconSize={Icon.SIZE_LARGE} />
      </span>
    </Profile>
    <Menu>
      <MenuItem
        icon="id-number"
        text="Edit My Profile"
        onClick={onEditProfile}
      />
      <MenuDivider />
      <MenuItem icon="log-out" text="Logout" onClick={onLogout} />
    </Menu>
  </Popover>
)

AccountMenu.propTypes = {
  firstName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onEditProfile: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired
}

AccountMenu.defaultProps = {
  firstName: '',
  avatar: '',
  onEditProfile: () => {},
  onLogout: () => {}
}

export default connect(
  ({ user }) => {
    if (user && user.name && user.picture) {
      return {
        firstName:
          user.name.first.charAt(0).toUpperCase() + user.name.first.substr(1),
        avatar: user.picture.large
      }
    }
    return {}
  },
  {
    onLogout: logout
  }
)(AccountMenu)
