import '/styles/globals.css'
import '/styles/navbar.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react' 

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


function MyApp({ 
    Component, 
    pageProps: { session, ...pageProps }
    }) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>

    )
}

export default MyApp