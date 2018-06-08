import React from 'react';
import PropTypes from 'prop-types';
import { Page, Row, Column } from 'hedron';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import styled from 'styled-components';
import { Button, Callout, Classes, Colors, Intent } from '@blueprintjs/core';
import { login } from '../actions';
import Logo from '../assets/logo.svg';

const Viewport = styled.div`
  background: ${Colors.DARK_GRAY1};
  border-radius: 24px;
  opacity: 0.98;
  width: 100%;
`;

const Widget = styled.div`
  border-radius: 24px;
  background-color: ${Colors.DARK_GRAY3};
  opacity: 0.98;
  width: 100%;
  padding: 10px;
  padding-bottom: 20px;
`;

const WidgetHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const WidgetTitle = styled.h5`
  color: ${Colors.LIGHT_GRAY5};
  font-size: 1.8em;
  line-height: 1.3em;
  padding-top: 10px;
  padding-left: 10px;
`;

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
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1em;
  position: absolute;
  left: 5px;
  top: -30px;
  color: ${Colors.WHITE};
`;

const DefaultCallout = () => (
  <Callout icon="info-sign" style={{ marginTop: 20 }}>
    <h4 className={Classes.CALLOUT_TITLE}>What is my unique token?</h4>
    Your unique token should be something memerable and unique to you so we can
    load the same user every time you login.
  </Callout>
);

const ErrorCallout = ({ error }) => (
  <Callout icon="error" intent={Intent.WARNING} style={{ marginTop: 20 }}>
    <h4 className={Classes.CALLOUT_TITLE}>
      There was an error submitting the form
    </h4>
    {error}
  </Callout>
);

const Login = ({ handleSubmit, pristine, submitting, error }) => (
  <Page fluid className="pt-dark">
    <Row
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Column sm={12} lg={6}>
        <Viewport>
          <Row>
            <Column sm={12} style={{ padding: 50 }}>
              <Widget>
                <Row
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                >
                  <Column sm={12} fluid>
                    <WidgetHeader>
                      <img
                        src={Logo}
                        alt="Otis Payments"
                        style={{ width: 60 }}
                      />
                      <WidgetTitle>Otis Payment Portal Login</WidgetTitle>
                    </WidgetHeader>
                  </Column>
                </Row>
                <form onSubmit={handleSubmit}>
                  <Row
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                  >
                    <Column sm={12}>
                      <span style={{ position: 'relative' }}>
                        <Label>Unique Token</Label>
                        <Input
                          component="input"
                          type="text"
                          name="personalToken"
                          placeholder="abc123"
                          tabIndex={1}
                        />
                      </span>
                      {error ? (
                        <ErrorCallout error={error} />
                      ) : (
                        <DefaultCallout />
                      )}
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ textAlign: 'center' }}>
                      <Button
                        text="Login"
                        onClick={handleSubmit}
                        intent={Intent.PRIMARY}
                        disabled={pristine || submitting}
                        loading={submitting}
                        large
                      />
                    </Column>
                  </Row>
                </form>
              </Widget>
            </Column>
          </Row>
        </Viewport>
      </Column>
    </Row>
  </Page>
);

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string
};

Login.defaultProps = {
  pristine: true,
  submitting: false,
  error: ''
};

export default reduxForm({
  form: 'login',
  onSubmit: ({ personalToken }, dispatch) => {
    if (personalToken && personalToken.length > 3) {
      dispatch(login(personalToken));
    } else {
      const msg = 'Your unique token should be longer than 3 characters.';
      throw new SubmissionError({
        personalToken: msg,
        _error: msg
      });
    }
  }
})(Login);
