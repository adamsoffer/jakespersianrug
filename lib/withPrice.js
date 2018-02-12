import React from 'react'
import * as jsonpatch from 'fast-json-patch'
import fetch from 'isomorphic-fetch'

const withPrice = fn =>
  class extends React.Component {
    static async getInitialProps({ req }) {
      const res = await fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=SPANK&tsyms=USD'
      )
      const json = await res.json()
      return { price: json.USD * 376.344 }
    }

    constructor(props) {
      super(props)

      this.state = Object.assign(
        {
          tabledata: null,
          streamData: null,
          isConnected: false
        },
        props
      )
      this.onPriceChange = this.onPriceChange.bind(this)
    }

    componentDidMount() {
      require('howler')
      this.positiveSound = new window.Howl({
        src: ['/static/positive.mp3']
      })

      this.negativeSound = new window.Howl({
        src: ['/static/negative.mp3']
      })

      this.setState({
        positiveSound: this.positiveSound,
        negativeSound: this.negativeSound
      })

      const { price } = this.props
      const { StreamDataIo } = require('streamdataio-js-sdk')
      this.streamData = StreamDataIo.createEventSource(
        'https://min-api.cryptocompare.com/data/price?fsym=SPANK&tsyms=USD',
        'NWY2MWQ4ZWYtM2IyMS00M2Q4LTkzNjMtNWFiNDJmZmVlMzBl',
        []
      )
      this.streamData
        .onData(data => {
          // initialize your data with the initial snapshot
          console.log('Received data')
          console.log(data)
          this.tableData = data
        }, this)
        .onPatch(patch => {
          // update the data with the provided patch// update the data with the provided patch
          console.log('received patch %o', patch)
          jsonpatch.applyPatch(this.tableData, patch)
          this.onPriceChange(this.tableData)
        }, this)
        .onError(error => {
          // do whatever you need in case of error
          console.log('error: %o', error)
          this.streamData.close()
          this.isConnected = false
        }, this)
        .onOpen(function() {
          this.isConnected = true
        }, this)
      this.streamData.open()
    }

    componentWillUnmount() {
      if (this.streamData) {
        this.streamData.close()
      }
      this.isConnected = false
    }

    onPriceChange(tableData) {
      if (this.state.price < tableData.USD * 376.344) {
        this.state.positiveSound.play()
      } else {
        this.state.negativeSound.play()
      }
      this.setState({ price: tableData.USD * 376.344 })
    }

    render() {
      return fn(this.state)
    }
  }

export default withPrice
