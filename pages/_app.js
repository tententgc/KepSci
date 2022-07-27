import '/styles/globals.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>KepSci</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>

    )
}

export default MyApp