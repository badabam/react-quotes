import React, { Component } from 'react'

export default class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numLikes: 0,
    }
  }

  increaseLikes() {
    this.setState({ numLikes: this.state.numLikes + 1 })
  }

  render() {
    return (
      <div>
        <q lang="de">{this.props.text}</q>
        <i>- {this.props.author}</i>
        <button onClick={e => this.increaseLikes()}>
          Like ({this.state.numLikes})
        </button>
      </div>
    )
  }
}
