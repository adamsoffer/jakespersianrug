import React from 'react'
import Main from '../lib/layout'
import PersianRug from '../components/PersianRug'
import withPrice from '../lib/withPrice'

const Home = withPrice(({ price }) => {
  return (
    <Main>
      <PersianRug price={price} />
    </Main>
  )
})

export default Home
