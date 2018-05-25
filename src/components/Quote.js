import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

export default class Quote extends Component {
  render() {
    const quoteStyle = css`
      font-size: 1.3em;
      display: block;
      margin-bottom: 20px;
    `
    const StyledButton = styled('button')`
      height: 20px;
      background: ${props => (props.isBookmarked ? '#333' : 'hotpink')};
      color: white;
      border: none;
      &:not(:last-child) {
        margin-right: 2px;
      }
    `

    const ButtonContainer = styled('div')`
      position: absolute;
      right: 0;
      bottom: 0;
    `

    const QuoteContainer = styled('div')`
      font-family: Georgia, serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: lightgray;
      padding: 20px;
      position: relative;
    `

    return (
      <QuoteContainer>
        <q className={quoteStyle} lang="de">
          {this.props.text}
        </q>
        <i>- {this.props.author}</i>
        <ButtonContainer>
          <StyledButton onClick={e => this.props.onLike()}>
            Like ({this.props.numLikes})
          </StyledButton>
          <StyledButton
            isBookmarked={this.props.isBookmarked}
            onClick={e => this.props.onBookmark()}
          >
            Bookmark
          </StyledButton>
        </ButtonContainer>
      </QuoteContainer>
    )
  }
}
