import '/styles/globals.css'
import 'tailwindcss/tailwind.css';
import React from 'react'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>KepSci</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
