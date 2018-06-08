import React from 'react'
import PropTypes from 'prop-types'
import { Page, Row, Column } from 'hedron'
import { Link } from 'redux-little-router'
import Transition from 'react-transition-group/Transition'
import styled from 'styled-components'
import { Colors } from '@blueprintjs/core'
import AccountMenu from './AccountMenu'
import Sidebar from './Sidebar'
import { Tablet } from '../components/BreakPoint'
import Logo from '../assets/logo.svg'

const Title = styled.h1`
  color: ${Colors.LIGHT_GRAY5};
  font-weight: normal;
  margin: 0 0 5px 15px;
  font-size: 2.2em;
  font-family: inherit;
`

const SubTitle = styled.h2`
  color: ${Colors.LIGHT_GRAY2};
  font-weight: normal;
  margin: 0 0 0 15px;
  font-size: 1.2em;
`

const Viewport = styled.div`
  background: ${Colors.DARK_GRAY1};
  border-radius: 24px;
  opacity: 0.98;
  width: 100%;
`

const defaultStyle = {
  transition: `all 500ms ease-in-out`,
  transform: 'translateY(-20px)',
  opacity: 0
}

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'translateY(-20px)'
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0px)'
  }
}

const Layout = ({ children, title, subtitle }) => (
  <Page fluid className="pt-dark">
    <Row alignItems="center" justifyContent="space-between">
      <Column sm={1.5} style={{ padding: '10px 20px', textAlign: 'center' }}>
        <Link href="/">
          <img
            src={Logo}
            alt="Otis Payments"
            style={{ width: 70, marginTop: 5 }}
          />
        </Link>
      </Column>
      <Column sm={7.5} style={{ padding: '10px 20px' }}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Column>
      <Column sm={3} style={{ padding: '10px 20px' }}>
        <AccountMenu />
      </Column>
    </Row>
    <Row>
      <Tablet larger>
        <Column sm={1.5} style={{ padding: '0 0 0 10px' }}>
          <Sidebar />
        </Column>
        <Column sm={10.5} style={{ padding: '0px 20px 0 0' }}>
          <Row>
            <Column lg={12} style={{ padding: '0px 10px' }}>
              <Viewport>
                <Transition in timeout={10} appear>
                  {state => (
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                      }}
                    >
                      {children}
                    </div>
                  )}
                </Transition>
              </Viewport>
            </Column>
          </Row>
        </Column>
      </Tablet>
      <Tablet smaller>
        <Column sm={12} style={{ padding: '0px 20px' }}>
          <Row>
            <Column lg={12} style={{ padding: '0px 10px' }}>
              <Viewport>
                <Transition in timeout={10} appear>
                  {state => (
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                      }}
                    >
                      {children}
                    </div>
                  )}
                </Transition>
              </Viewport>
            </Column>
          </Row>
        </Column>
      </Tablet>
    </Row>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

Layout.defaultProps = {
  title: 'My Dashboard',
  subtitle: 'Welcome to Otis payment portal'
}

export default Layout
