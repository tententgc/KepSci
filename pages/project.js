import Head from 'next/head'
import Image from 'next/image'
import styles from  '../styles/Project.module.css' 
import { useState, useEffect } from 'react'
import CustomTable from '../components/Customtable'
// function Project() {

//     const [showPosts, setshowPosts] = useState()
//     const apiUrl = 'https://jsonplaceholder.typicode.com/todos/'
//     let displayData

//     async function pullJson() {
//         const response = await fetch(apiUrl)
//         const responseData = await response.json()
//         displayData = responseData.map(function (todo) {
//             return (
//                 <>
//                 <p key={todo.id}>{todo.title} </p>
//                 </>
//             )
//         })
//         setshowPosts(displayData)
//     }

//     useEffect(() => {
//         pullJson()
//     }, [])

//     return (
        // <div className={styles.container
        // }>
        //     <Head>
        //         <title>Project |  KepSci</title>
        //         <link rel='icon' href='/favicon.ico' />
        //     </Head>
        //     <main className={styles.main}>
        //         <h1>Project List</h1>
        //         {showPosts}
        //     </main>

//         </div>
//     )
// }
const Project = () => {
    return (
    <div className={styles.container
        }>
            <Head>
                <title>Project |  KepSci</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <h1>Project List</h1>
            
                <CustomTable /> 

            </main>
    </div>
    )
}


export default Project; 