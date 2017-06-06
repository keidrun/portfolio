import React from 'react';

import { storiesOf } from '@storybook/react';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('without text', () => (
    <Header />
  ))
  .add('with text', () => (
    <Header>Hello Header!</Header>
  ));
