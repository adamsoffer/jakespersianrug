import React from 'react'
import Main from '../lib/layout'
import PersianRug from '../components/PersianRug'
import withPrice from '../lib/withPrice'

export default withPrice(({ price }) => {
  return (
    <Main>
      <PersianRug price={price} />
    </Main>
  )
})
