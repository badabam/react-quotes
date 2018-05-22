import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Quote from '../src/components/Quote'
import Notification from '../src/components/Notification'

storiesOf('Quote', module)
  .addDecorator(withKnobs)
  .add('with short text', () => (
    <Quote
      text={text('Copy', 'Hello world')}
      author={text('Author name', 'Jerry')}
      onLike={action('liked')}
      numLikes={number('Number of likes', 3)}
    />
  ))
  .add('with long text', () => (
    <Quote
      text={text('Copy', 'Lorem ipsum dolor sit. This is a longer quote.')}
      author={text('Author name', 'Jerry')}
      onLike={action('liked')}
      numLikes={number('Number of likes', 0)}
    />
  ))

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Notification
      show={boolean('Show Notification', true)}
      onClose={action('closed')}
    />
  ))
