import React from 'react';
import { Row, Column } from 'hedron';
import styled from 'styled-components';
import {
  Button,
  ButtonGroup,
  Colors,
  Icon,
  Intent,
  Tag
} from '@blueprintjs/core';
import Layout from '../components/Layout';
import Widget from '../components/Widget';

const WidgetTitle = styled.h5`
  color: ${Colors.LIGHT_GRAY5};
`;

const Mobile = () => (
  <Layout
    title="My Mobile Accounts"
    subtitle="Otis Payment Portal MObile Account"
  >
    <Row>
      <Column lg={12} style={{ padding: 50 }}>
        <Widget>
          <Row>
            <Column sm={8} style={{ paddingBottom: 5, paddingLeft: 10 }}>
              <WidgetTitle>Mobile Devices</WidgetTitle>
            </Column>
            <Column
              sm={2}
              style={{ paddingBottom: 5, paddingRight: 0, textAlign: 'right' }}
            >
              <Icon icon="search" iconSize={Icon.SIZE_LARGE} />
            </Column>
            <Column
              sm={2}
              style={{
                paddingBottom: 0,
                paddingTop: 15,
                paddingRight: 10,
                textAlign: 'right'
              }}
            >
              <Tag
                interactive
                large
                minimal
                round
                style={{ color: Colors.LIGHT_GRAY1 }}
              >
                <Icon icon="filter-list" style={{ marginRight: 10 }} />
                Filter by
              </Tag>
            </Column>
          </Row>
          <table className="pt-html-table" style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ paddingTop: 25 }}>
                  Blueprint - CSS framework and UI toolkit
                </td>
                <td style={{ paddingTop: 25, textAlign: 'right' }}>
                  <ButtonGroup>
                    <Button icon="tick" intent={Intent.SUCCESS} />
                    <Button icon="cog" rightIcon="chevron-down" />
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </table>
        </Widget>
      </Column>
    </Row>
  </Layout>
);

Mobile.propTypes = {};

Mobile.defaultProps = {};

export default Mobile;
