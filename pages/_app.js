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
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"></link>
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
