import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  const [showPosts , setshowPosts] = useState()
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'

  let displayData
    function pullJson() {
      fetch(apiUrl)
      .then(response => response.json())
      .then(responseData => { 
        displayData = responseData.map(function(todo){ 
          return (
            <p key={todo.id}>{todo.title}</p>
          )
        })
        console.log(responseData)
        setshowPosts(displayData)
      })
      // return
    }

    useEffect(()=>{ 
      pullJson()
    },[])

  return (
    <div className='styles.container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1>Posts from API</h1>
        {showPosts} 
      </main>

      </div>
  )
}
