import Document, { Head, Main, NextScript } from 'next/document'
import { renderStatic } from 'glamor/server'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Jake's Persian Rug</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Real time price updates for Jake's persian rug."
          />
          <meta
            name="image"
            content="https://www.jakespersianrug.com/static/jake.jpg"
          />
          <meta itemprop="name" content="Jakes Persian Rug" />
          <meta
            itemprop="description"
            content="Real time price updates for Jake's persian rug."
          />
          <meta
            itemprop="image"
            content="https://www.jakespersianrug.com/static/jake.jpg"
          />
          <meta name="og:title" content="Jakes Persian Rug" />
          <meta
            name="og:description"
            content="Real time price updates for Jake's persian rug."
          />
          <meta
            name="og:image"
            content="https://www.jakespersianrug.com/static/jake.jpg"
          />
          <meta name="og:url" content="https://www.jakespersianrug.com/" />
          <meta name="og:site_name" content="Jake's Persian Rug" />
          <meta name="og:type" content="website" />

          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDNHMWK');`
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDNHMWK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
