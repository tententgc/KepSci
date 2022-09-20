import Link from 'next/link'
import Image from 'next/image'
import styles from "/styles/home.module.css";
import Navbar from '/components/nav'
import Footer from '/components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.Banner}>
        <div className='py-32 px-3'>
          <p className='text-center mb-3 text-white text-3xl md:text-4xl font-semibold'>ฐานข้อมูลงานวิจัย และวิทยานิพนธ์</p>
          <p className='text-center text-xl text-white'>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
        </div>
      </div>
      <div className="main py-10 px-4 lg:pt-16">
        <div className="md:container md:mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-y-4 md:gap-x-4">
            <div class="list">
              <Link href="/search">
                <a>
                  <div class="flex bg-white justify-center items-center p-3 rounded-lg drop-shadow-md hover:bg-neutral-100 duration-200">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-3"/> 
                    ค้นหางานวิจัยและวิทยานิพนธ์
                  </div>
                </a>
              </Link>
            </div>
            <div class="sm:col-span-3">
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
