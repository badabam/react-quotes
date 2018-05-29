export default {
  getQuotes() {
    const url = 'https://favqs.com/api/quotes'

    return fetch(url, {
      headers: {
        Authorization: 'Token token="abced644f5cd27fa57b5d5914d08f3a3"',
      },
    }).then(res => res.json())
  },
}
