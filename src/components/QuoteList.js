import React, { Component } from 'react'
import { css } from 'emotion'
import Quote from './Quote'

export default class QuoteList extends Component {
  render() {
    return (
      <section
        className={css`
          grid-area: quotes;
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(300px, auto));
          grid-template-rows: repeat(auto-fill, minmax(max-content, auto));
          height: 100%;
          overflow: scroll;
        `}
      >
        {this.props.quotes.map(quote => (
          <Quote
            key={quote.id}
            numLikes={quote.likes}
            text={quote.body}
            color={quote.color}
            author={quote.author}
            isBookmarked={quote.isBookmarked}
            onBookmark={e => this.props.bookmark(quote.id)}
            onLike={e => this.props.increaseLikes(quote.id)}
          />
        ))}
      </section>
    )
  }
}
