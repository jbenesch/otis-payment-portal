import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { Button, Colors, Intent } from '@blueprintjs/core'
import { updateUser } from '../actions'
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

const Input = styled(Field)`
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
  registered,
  dob,
  handleSubmit,
  pristine,
  submitting,
  error
}) => (
  <WidgetWrapper>
    <Row alignItems="center" alignContent="center">
      <Column sm={6} lg={7}>
        <WidgetTitle>My Profile</WidgetTitle>
        <div style={{ color: Colors.LIGHT_GRAY2, marginBottom: 10 }}>
          Registered: {registered}
        </div>
        <div style={{ color: Colors.LIGHT_GRAY3 }}>Birthday: {dob}</div>
      </Column>
      <Column sm={6} lg={5} style={{ textAlign: 'right' }}>
        <Avatar src={avatar} style={{ width: 120 }} />
      </Column>
    </Row>
    <form onSubmit={handleSubmit}>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Username</Label>
            <Input
              component="input"
              type="text"
              name="username"
              placeholder="joesmith"
              tabIndex={1}
            />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Phone Number</Label>
            <Input
              component="input"
              type="text"
              name="phone"
              placeholder="(321) 321-3214"
              tabIndex={2}
            />
          </span>
        </Column>
      </Row>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Address</Label>
            <Input
              component="input"
              type="text"
              name="address"
              placeholder="1234 Main St"
              tabIndex={3}
            />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>City</Label>
            <Input
              component="input"
              type="text"
              name="city"
              placeholder="San Diego"
              tabIndex={4}
            />
          </span>
        </Column>
      </Row>
      <Row>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>State</Label>
            <Input
              component="input"
              type="text"
              name="state"
              placeholder="California"
              tabIndex={5}
            />
          </span>
        </Column>
        <Column lg={6}>
          <span style={{ position: 'relative' }}>
            <Label>Zip Code</Label>
            <Input
              component="input"
              type="text"
              name="zip"
              placeholder="92071"
              tabIndex={6}
            />
          </span>
        </Column>
      </Row>
      <Row>
        <Column style={{ textAlign: 'center' }}>
          <Button
            text="Update Profile"
            onClick={handleSubmit}
            intent={Intent.PRIMARY}
            disabled={pristine || submitting}
            loading={submitting}
            large
          />
        </Column>
      </Row>
    </form>
  </WidgetWrapper>
)

ProfileWidget.propTypes = {
  firstName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    username: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  registered: PropTypes.string,
  dob: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string
}

ProfileWidget.defaultProps = {
  firstName: '',
  avatar: '',
  initialValues: {
    username: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  },
  registered: '',
  dob: '',
  handleSubmit: () => {},
  pristine: true,
  submitting: false,
  error: ''
}

export default compose(
  connect(
    ({ user }) => {
      if (user && user.name && user.picture) {
        return {
          firstName:
            user.name.first.charAt(0).toUpperCase() + user.name.first.substr(1),
          avatar: user.picture.large,
          initialValues: {
            username: user.login.username,
            phone: user.phone,
            address: user.location.street,
            city: user.location.city,
            state: user.location.state,
            zip: user.location.postcode
          },
          registered: user.registered,
          dob: user.dob
        }
      }
      return {}
    },
    {}
  ),
  reduxForm({
    form: 'editProfile',
    onSubmit: (user, dispatch) => {
      dispatch(
        updateUser({
          results: {
            login: {
              username: user.username
            },
            phone: user.phone,
            location: {
              street: user.address,
              city: user.city,
              state: user.state,
              postcode: user.zip
            }
          }
        })
      )
    }
  })
)(ProfileWidget)
