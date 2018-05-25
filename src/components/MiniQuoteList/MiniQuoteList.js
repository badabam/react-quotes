import React, { Component } from 'react'
import MiniQuote from '../MiniQuote'
import './MiniQuoteList.css'

export default class MiniQuoteList extends Component {
  render() {
    return (
      <div style={{ gridArea: this.props.gridArea }} className="MiniQuoteList">
        <h3>{this.props.headline}</h3>
        <div className="MiniQuoteList__list">
          {this.props.quotes
            // bessere idee:
            // wir reichen die Filter-Funktion
            // als Prop rein!
            .filter(this.props.filterFunction)
            .map(quote => (
              <MiniQuote
                author={quote.author}
                text={quote.body}
                color="#fff"
                background={this.props.background}
              />
            ))}
        </div>
      </div>
    )
  }
}
