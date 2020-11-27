import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jake's Persian Rug</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Real time price updates for Jake's persian rug."
        />
        <meta name="image" content="https://www.jakespersianrug.com/jake.jpg" />
        <meta itemprop="name" content="Jakes Persian Rug" />
        <meta
          itemprop="description"
          content="Real time price updates for Jake's persian rug."
        />
        <meta
          itemprop="image"
          content="https://www.jakespersianrug.com/jake.jpg"
        />
        <meta name="og:title" content="Jakes Persian Rug" />
        <meta
          name="og:description"
          content="Real time price updates for Jake's persian rug."
        />
        <meta
          name="og:image"
          content="https://www.jakespersianrug.com/jake.jpg"
        />
        <meta name="og:url" content="https://www.jakespersianrug.com/" />
        <meta name="og:site_name" content="Jake's Persian Rug" />
        <meta name="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
