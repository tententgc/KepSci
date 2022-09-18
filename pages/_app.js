import '/styles/globals.css'
import '/styles/navbar.css';
import '/styles/footer.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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