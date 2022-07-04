import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Project from './project'

export default function Home() {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Home | KepSci</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

    <main> 
      <h1>Home Page</h1>
    </main>
    </div>
  )
}
