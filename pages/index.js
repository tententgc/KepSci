import Layout from '/components/layouts'
import Link from 'next/link'
import Image from 'next/image'
import localImage from "../images/logo.png";

export default function Home() {
  return (
    <Layout>
      <div className='section mb-10 flex justify-center'>
        <Image
          src={localImage}
          className='mx-auto'
          width={750}
          height={250}
        />
      </div>
      <div className='section mb-10'>
        <p className='text-center mt-14 mb-3 text-3xl md:text-4xl font-semibold'>ฐานข้อมูลวิทยานิพนธ์</p>
        <p className='text-center text-lg text-gray-500'>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
        {/* <hr className='max-w-2xl sm:mx-5 md:mx-auto my-3 bg-gray-400 h-0.5'></hr> */}
      </div>
      <div className='section flex justify-center'>
        <Link href="/project">
          <button type="button" className='mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>ค้นหาวิทยานิพนธ์</button>
        </Link>
      </div>
    </Layout>
  )
}
