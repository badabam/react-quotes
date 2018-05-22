import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Quote from '../src/components/Quote'

storiesOf('Quote', module)
  .add('with short text', () => (
    <Quote
      text="Hello world"
      author="Jerry"
      onLike={action('liked')}
      numLikes={3}
    />
  ))
  .add('with long text', () => (
    <Quote
      text="Lorem ipsum dolor sit. This is a longer quote."
      author="Jerry"
      onLike={action('liked')}
      numLikes={3}
    />
  ))
