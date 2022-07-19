import Layout from '/components/layouts'
import Link from 'next/link'
import Image from 'next/image'
import localImage from "../images/logo.png";

export default function Home() {
  return (
    <Layout>
      <div className='section mb-10'>
        <Image
          src={localImage}
          alt="Picture of the author"
          className='w-20'
        />
        <p className='text-center mt-14 mb-3 text-5xl font-semibold'>Research Libraries</p>
        <p className='text-center text-gray-500	'>Public journal and articles - King Mongkut's University of Technology Thonburi</p>
        {/* <hr className='max-w-2xl sm:mx-5 md:mx-auto my-3 bg-gray-400 h-0.5'></hr> */}
      </div>
      <div className='section flex justify-center'>
        <Link href="/project">
          <button type="button" className='mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search Documentation</button>
        </Link>
      </div>
    </Layout>
  )
}
