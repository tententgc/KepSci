import Head from 'next/head'
import Image from 'next/image'
import styles from  '../styles/Project.module.css' 
import { useState, useEffect } from 'react'
import CustomTable from '../components/Customtable'

const Project = () => {
    return (
    <div className={styles.container
        }>
            <Head>
                <title>Project |  KepSci</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className= {styles.table}>
                <CustomTable /> 
            </main>
    </div>
    )
}


export default Project; 