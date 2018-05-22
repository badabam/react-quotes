import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <div>
        <q lang="de">{this.props.text}</q>
        <i>- {this.props.author}</i>
        <button onClick={e => this.props.onLike()}>
          Like ({this.props.numLikes})
        </button>
      </div>
    )
  }
}
