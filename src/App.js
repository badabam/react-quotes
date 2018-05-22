import React, { Component } from 'react'
import Quote from './components/Quote'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalLikes: 0,
      quotes: [
        { text: 'It is how it is', author: 'Jerry', likes: 0, id: 0 },
        { text: 'props are great', author: 'Some React guy', likes: 0, id: 1 },
        { text: 'props are great', author: 'Some React guy', likes: 0, id: 2 },
        { text: 'props are great', author: 'Some React guy', likes: 0, id: 3 },
        { text: 'props are great', author: 'Some React guy', likes: 0, id: 4 },
      ],
    }
  }

  increaseLikes(id) {
    const foundQuoteIndex = this.state.quotes.findIndex(
      quote => quote.id === id
    )
    const foundQuote = this.state.quotes[foundQuoteIndex]
    const startOfNewArray = this.state.quotes.slice(0, foundQuoteIndex)
    const endOfNewArray = this.state.quotes.slice(foundQuoteIndex + 1)
    const newObject = { ...foundQuote, likes: foundQuote.likes + 1 }

    this.setState({
      quotes: [...startOfNewArray, newObject, ...endOfNewArray],
      totalLikes: this.state.totalLikes + 1,
    })
  }

  render() {
    return (
      <div>
        <h3>Total likes: {this.state.totalLikes}</h3>
        {this.state.quotes.map(quote => (
          <Quote
            key={quote.id}
            numLikes={quote.likes}
            text={quote.text}
            author={quote.author}
            onLike={e => this.increaseLikes(quote.id)}
          />
        ))}
      </div>
    )
  }
}

export default App
