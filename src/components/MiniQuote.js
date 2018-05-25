import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

export default class MiniQuote extends Component {
  render() {
    const quoteStyle = css`
      font-size: 1em;
      display: block;
      margin-bottom: 10px;
    `
    const StyledDiv = styled('div')`
      display: flex;
      flex-direction: column;
      color: ${this.props.color || 'black'};
      background: ${this.props.background || 'lightgray'};
      margin-bottom: 1px;
      padding: 10px;
    `

    return (
      <StyledDiv>
        <q className={quoteStyle} lang="de">
          {this.props.text.substr(0, 20) + '...'}
        </q>
        <i>- {this.props.author}</i>
      </StyledDiv>
    )
  }
}
