import React from 'react';

import { storiesOf } from '@storybook/react';

import MainSection from './MainSection';

storiesOf('MainSection', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .add('without text', () => (
    <MainSection />
  ))
  .add('with text', () => (
    <MainSection>Hello MainSection!</MainSection>
  ));
