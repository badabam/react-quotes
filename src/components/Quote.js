import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { buttonStyle } from '../styles/buttons'

export default class Quote extends Component {
  render() {
    const quoteStyle = css`
      font-size: 1.3em;
      display: block;
      margin-bottom: 20px;
    `

    const StyledDiv = styled('div')`
      display: flex;
      flex-direction: column;
      background: ${this.props.color || 'lightgray'};
      margin-bottom: 2px;
      width: 200px;
      padding: 20px;
    `

    return (
      <StyledDiv>
        <q className={quoteStyle} lang="de">
          {this.props.text}
        </q>
        <i>- {this.props.author}</i>
        <button className={buttonStyle} onClick={e => this.props.onLike()}>
          Like ({this.props.numLikes})
        </button>
      </StyledDiv>
    )
  }
}
