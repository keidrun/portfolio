import React from 'react';

import { storiesOf } from '@storybook/react';

import Navbar from './Navbar';

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('without text', () => (
    <Navbar />
  ))
  .add('with text', () => (
    <Navbar>Hello Navbar!</Navbar>
  ));
