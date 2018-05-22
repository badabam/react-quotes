import React, { Component } from 'react'

export default class Quote extends Component {
  // wird ab jetzt außerhalb gemanaged:
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     numLikes: 0,
  //   }
  // }

  // wird außerhalb gemacht:
  // increaseLikes() {
  //   this.setState({ numLikes: this.state.numLikes + 1 })
  // }

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
