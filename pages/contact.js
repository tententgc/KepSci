import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | KepSci</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1>Contact Page</h1>
            </main>
        </div>
    )
}

export default Contact;