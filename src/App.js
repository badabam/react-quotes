import React, { Component } from 'react'
import Quote from './components/Quote'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstQuoteLikes: 0,
      secondQuoteLikes: 0,
    }
  }

  increaseFirstLikes() {
    this.setState({ firstQuoteLikes: this.state.firstQuoteLikes + 1 })
  }

  increaseSecondLikes() {
    this.setState({ secondQuoteLikes: this.state.secondQuoteLikes + 1 })
  }

  render() {
    const totalLikes = this.state.firstQuoteLikes + this.state.secondQuoteLikes
    return (
      <div>
        <h1>Total likes: {totalLikes}</h1>
        <Quote
          onLike={e => this.increaseFirstLikes()}
          numLikes={this.state.firstQuoteLikes}
          text="It is how it is"
          author="Jerry"
        />
        <Quote
          onLike={e => this.increaseSecondLikes()}
          numLikes={this.state.secondQuoteLikes}
          text="props are immutable"
          author="Some React-Guy"
        />
      </div>
    )
  }
}

export default App
