import React from 'react';
import { Row, Column } from 'hedron';
import Layout from '../components/Layout';
import AccountWidget from '../components/AccountWidget';
import ProfileWidget from '../components/ProfileWidget';
import { Mobile, Tablet, Laptop, Desktop } from '../components/BreakPoint';

const Dashboard = () => (
  <Layout title="My Dashboard" subtitle="Welcome to Otis payment portal">
    <Row>
      <Mobile smaller>
        <Column sm={12} style={{ padding: 50 }}>
          <ProfileWidget />
        </Column>
      </Mobile>
      <Mobile range>
        <Column sm={12} style={{ padding: 50 }}>
          <ProfileWidget />
        </Column>
      </Mobile>
      <Tablet range>
        <Column sm={12} style={{ padding: 50 }}>
          <ProfileWidget />
          <AccountWidget />
          <AccountWidget />
        </Column>
      </Tablet>
      <Laptop range>
        <Column sm={12} style={{ padding: 50 }}>
          <ProfileWidget />
          <AccountWidget />
          <AccountWidget />
        </Column>
      </Laptop>
      <Desktop larger>
        <Column lg={6} style={{ padding: 50 }}>
          <AccountWidget />
          <AccountWidget />
        </Column>
        <Column lg={6} style={{ padding: 50, paddingLeft: 0 }}>
          <ProfileWidget />
        </Column>
      </Desktop>
    </Row>
  </Layout>
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
