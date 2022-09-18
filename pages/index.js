import Link from 'next/link'
import Image from 'next/image'
import styles from "/styles/home.module.css";
import Navbar from '/components/nav'
import Footer from '/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.Banner}>
        <div className='py-32'>
          <p className='text-center mb-3 text-white text-3xl md:text-4xl font-semibold'>ฐานข้อมูลงานวิจัย และวิทยานิพนธ์</p>
          <p className='text-center text-xl text-white'>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
        </div>
      </div>
      <div className="main py-10 px-4 lg:pt-16">
        <div className="md:container md:mx-auto">
          
        </div>
      </div>
      <Footer />
    </>
  )
}
