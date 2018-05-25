import React, { Component } from 'react'
import QuoteList from './components/QuoteList'
import MiniQuoteList from './components/MiniQuoteList/MiniQuoteList'
import Notification from './components/Notification'
import api from './api'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'

injectGlobal(`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Helvetica Neue", sans-serif;
    overflow: hidden;
  }

`)

const Grid = styled('div')`
  display: grid;
  overflow: hidden;
  padding: 10px;
  height: 100vh;
  grid-gap: 0 20px;
  grid-template-columns: auto 200px;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'quotes bookmarks'
    'quotes likes';
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalLikes: 0,
      showNotification: false,
      quotes: [],
    }
  }

  componentDidMount() {
    this.setState({
      quotes: api.getQuotes(),
    })
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
      showNotification: true,
    })
  }

  bookmark(id) {
    const foundQuoteIndex = this.state.quotes.findIndex(
      quote => quote.id === id
    )
    const foundQuote = this.state.quotes[foundQuoteIndex]
    const startOfNewArray = this.state.quotes.slice(0, foundQuoteIndex)
    const endOfNewArray = this.state.quotes.slice(foundQuoteIndex + 1)
    const newObject = { ...foundQuote, isBookmarked: !foundQuote.isBookmarked }

    this.setState({
      quotes: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }

  closeNotification() {
    this.setState({ showNotification: false })
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <QuoteList
            bookmark={id => this.bookmark(id)}
            increaseLikes={id => this.increaseLikes(id)}
            quotes={this.state.quotes}
          />
          <MiniQuoteList
            headline={'Bookmarks'}
            gridArea={'bookmarks'}
            background={'#333'}
            quotes={this.state.quotes}
            filterFunction={quote => quote.isBookmarked}
          />
          <MiniQuoteList
            headline={'Likes'}
            gridArea={'likes'}
            background={'hotpink'}
            quotes={this.state.quotes}
            filterFunction={quote => quote.likes > 0}
          />
        </Grid>
        <Notification
          show={this.state.showNotification}
          onClose={e => this.closeNotification()}
        />
      </React.Fragment>
    )
  }
}

export default App
