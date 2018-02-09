import React from 'react'
import fetch from 'isomorphic-fetch'
import Main from '../lib/layout'
import PersianRug from '../components/PersianRug'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const res = await fetch(
      'https://api.coinmarketcap.com/v1/ticker/spankchain/'
    )
    const json = await res.json()
    return { price: json[0].price_usd * 376.344 }
  }

  render() {
    return (
      <Main>
        <PersianRug price={this.props.price} />
      </Main>
    )
  }
}
