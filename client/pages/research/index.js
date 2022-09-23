import Layout from '/components/layouts'
import Link from 'next/link'
import sheet from '/images/sheet.png'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <div className='bg-white rounded-lg p-5 mb-5 max-w-6xl mx-auto'>
                <div className="sm:grid sm:grid-cols-4 sm:gap-4 justify-items-center">
                    <div className='col-span-1'>
                        <Image
                            src={sheet}
                            alt="Paper"
                            className='image'
                        />
                    </div>
                    <div className='col-span-3'>
                        <div className='bg-[#ffd110] w-full'>
                           ชื่องานวิจัยหรือวิทยานิพนธ์ 
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}