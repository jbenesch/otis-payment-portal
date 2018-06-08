import React from 'react'
import { Page, Row, Column } from 'hedron'
import styled from 'styled-components'
import { Colors } from '@blueprintjs/core'
import Logo from '../assets/logo.svg'

const Viewport = styled.div`
  background: ${Colors.DARK_GRAY1};
  border-radius: 24px;
  opacity: 0.98;
  width: 100%;
`

const Widget = styled.div`
  border-radius: 24px;
  background-color: ${Colors.DARK_GRAY3};
  opacity: 0.98;
  width: 100%;
  padding: 10px;
  padding-bottom: 20px;
`

const WidgetHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
`

const WidgetTitle = styled.h1`
  color: ${Colors.LIGHT_GRAY5};
  font-size: 1.8em;
  line-height: 1.3em;
  padding-top: 10px;
  padding-left: 10px;
`

const NoMatch = () => (
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
                        style={{ width: 80 }}
                      />
                      <WidgetTitle>404 Not Found</WidgetTitle>
                    </WidgetHeader>
                  </Column>
                </Row>
              </Widget>
            </Column>
          </Row>
        </Viewport>
      </Column>
    </Row>
  </Page>
)

export default NoMatch
