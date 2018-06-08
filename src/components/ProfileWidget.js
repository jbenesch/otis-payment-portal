import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { Button, Colors, Intent } from '@blueprintjs/core'
import Avatar from '../components/Avatar'
import Widget from '../components/Widget'

const WidgetTitle = styled.h5`
  color: ${Colors.LIGHT_GRAY5};
  font-size: 1.8em;
  margin-bottom: 15px;
`

const WidgetWrapper = styled(Widget)`
  position: relative;
  opacity: 0.98;
`

const Input = styled.input`
  width: 100%;
  background: transparent;
  font-size: 1.2em;
  border: 0;
  border-bottom: 1px solid
    ${({ active }) => (active ? Colors.GREEN5 : Colors.GRAY5)};
  padding: 15px 5px;
  color: ${Colors.LIGHT_GRAY5};
  &::placeholder {
    color: ${Colors.DARK_GRAY5};
  }
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1em;
  position: absolute;
  left: 5px;
  top: -30px;
  color: ${Colors.WHITE};
`

export const ProfileWidget = ({
  firstName,
  avatar,
  username,
  phone,
  address,
  city,
  state,
  zip,
  registered,
  dob
}) => (
  <WidgetWrapper>
    <Row alignItems="center" alignContent="center">
      <Column lg={7}>
        <WidgetTitle>My Profile</WidgetTitle>
        <div style={{ color: Colors.LIGHT_GRAY2, marginBottom: 10 }}>
          Registered: {registered}
        </div>
        <div style={{ color: Colors.LIGHT_GRAY3 }}>Birthday: {dob}</div>
      </Column>
      <Column lg={5} style={{ textAlign: 'right' }}>
        <Avatar src={avatar} style={{ width: 120 }} />
      </Column>
    </Row>
    <form>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Username</Label>
            <Input type="text" value={username} />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="(321) 321-3214" value={phone} />
          </span>
        </Column>
      </Row>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Address</Label>
            <Input type="text" placeholder="1234 Main St" value={address} />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>City</Label>
            <Input type="text" placeholder="San Diego" value={city} />
          </span>
        </Column>
      </Row>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>State</Label>
            <Input type="text" placeholder="California" value={state} />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Zip Code</Label>
            <Input type="text" placeholder="92071" value={zip} />
          </span>
        </Column>
      </Row>
      <Row>
        <Column style={{ textAlign: 'center' }}>
          <Button text="Update Profile" intent={Intent.PRIMARY} large />
        </Column>
      </Row>
    </form>
  </WidgetWrapper>
)

ProfileWidget.propTypes = {
  firstName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  phone: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  registered: PropTypes.string,
  dob: PropTypes.string
}

ProfileWidget.defaultProps = {
  firstName: '',
  avatar: '',
  username: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  registered: '',
  dob: ''
}

export default connect(
  ({ user }) => {
    if (user && user.name && user.picture) {
      return {
        firstName:
          user.name.first.charAt(0).toUpperCase() + user.name.first.substr(1),
        avatar: user.picture.large,
        username: user.login.username,
        phone: user.phone,
        address: user.location.street,
        city: user.location.city,
        state: user.location.state,
        zip: user.location.postcode,
        registered: user.registered,
        dob: user.dob
      }
    }
    return {}
  },
  {}
)(ProfileWidget)
