import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import MobileLayout from '../../.storybook/Mobile';
import AccountMenu from './AccountMenu';

const AccountMenuStory = storiesOf('Account Menu', module);

AccountMenuStory.addDecorator(withKnobs);

AccountMenuStory.add('Desktop', () => {
  const firstName = text('First Name', 'Joe');
  const avatar = text(
    'Avatar',
    'https://randomuser.me/api/portraits/men/51.jpg'
  );

  return (
    <div style={{ margin: '50px' }}>
      <AccountMenu
        firstName={firstName}
        avatar={avatar}
        onEditProfile={action('Edit Profile')}
        onLogout={action('Log User Out')}
      />
    </div>
  );
});

AccountMenuStory.add('Mobile', () => {
  const firstName = text('First Name', 'Joe');
  const avatar = text(
    'Avatar',
    'https://randomuser.me/api/portraits/men/51.jpg'
  );

  return (
    <MobileLayout>
      {() => (
        <div style={{ float: 'right', margin: 10 }}>
          <AccountMenu
            firstName={firstName}
            avatar={avatar}
            onEditProfile={action('Edit Profile')}
            onLogout={action('Log User Out')}
          />
        </div>
      )}
    </MobileLayout>
  );
});
