import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="google-site-verification"
            content="gQxLz6yanrXY28v-KEbfdhihGvSpLIUXR2UBE7IRQBo"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:title" content="Rj Oliverio | Making websites that work for you" />
          <meta property="og:description" content="Learn more about Rj Oliverio" />
          <meta property="og:image" content="/images/seo-cover.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
