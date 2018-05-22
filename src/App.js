import React, { Component } from 'react'
import Quote from './components/Quote'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Some quotes:</h1>
        <Quote text="It is how it is" author="Jerry" />
        <Quote text="props are immutable" author="Some React-Guy" />
      </div>
    )
  }
}

export default App
