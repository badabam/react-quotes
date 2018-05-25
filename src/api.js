import * as data from './data.json'

export default {
  getQuotes() {
    return data.quotes.map(quote => ({
      ...quote,
      likes: 0,
      isBookmarked: false,
    }))
  },
}
