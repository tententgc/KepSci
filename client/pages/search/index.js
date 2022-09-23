import Layout from '/components/layouts'
import Link from 'next/link'
import sheet from '/images/sheet.png'
import Image from 'next/image'

export default function Home() {
    return (
        <Layout>
            <div className='mx-auto max-w-5xl'>
                <div className='bg-white rounded-lg p-5 mb-5 drop-shadow-md'>
                    <p className="text-lg">ค้นหางานวิจัยและวิทยานิพนธ์</p>
                    <hr className="mb-3 h-px bg-black border-0"></hr>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">ชื่องานวิจัยหรือวิทยานิพนธ์</span>
                        <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
                        <div className='input-group mb-3'>
                            <span className="block font-medium text-slate-700">ปีการศึกษา</span>
                            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                        </div>
                        <div className='input-group mb-3'>
                            <span className="block font-medium text-slate-700">ปีที่เผยแพร่</span>
                            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-5 drop-shadow-md'>
                    <Link href="/research/">
                        <a className=''>
                            ชื่องานวิจัยหรือวิทยานิพนธ์
                        </a>
                    </Link>
                    <p></p>
                </div>
            </div>
        </Layout>
    )

}