import Layout from '/components/layouts'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
                <div className='bg-white rounded-lg p-5 mb-5 drop-shadow-md mx-auto max-w-6xl'>
                    <p className="text-lg">ค้นหางานวิจัยและวิทยานิพนธ์</p>
                    <hr className="mb-3 h-px bg-black border-0"></hr>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">ชื่องานวิจัยหรือวิทยานิพนธ์ หรือคำที่เกี่ยวข้อง</span>
                        <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                    </div>
                    <div className='input-group mb-3'>
                        <span className="block font-medium text-slate-700">รายชื่อผู้จัดทำโครงงาน</span>
                        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm" />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
                        <div className='input-group mb-3'>
                            <span className="block font-medium text-slate-700">ประเภทของโครงงาน</span>
                            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                        </div>
                        <div className='input-group mb-3'>
                            <span className="block font-medium text-slate-700">ปีที่เผยแพร่</span>
                            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-7 drop-shadow-md mx-auto max-w-6xl'>
                    <div className='section mb-7'>
                        <Link href="/research">
                            <a className='text-blue-500 hover:text-blue-700'>
                                ชื่องานวิจัยหรือวิทยานิพนธ์
                            </a>
                        </Link>
                        <p className='text-gray-400'>รายละเอียดโดยสังเขป</p>
                        <p className='text-gray-400'>จัดทำโดย : นายโอ เค </p>
                    </div>
                    <div className='section mb-7'>
                        <Link href="/research">
                            <a className='text-blue-500 hover:text-blue-700'>
                                ชื่องานวิจัยหรือวิทยานิพนธ์
                            </a>
                        </Link>
                        <p className='text-gray-400'>รายละเอียดโดยสังเขป</p>
                        <p className='text-gray-400'>จัดทำโดย : นายโอ เค </p>
                    </div>
                    <div className='section mb-7'>
                        <Link href="/research">
                            <a className='text-blue-500 hover:text-blue-700'>
                                ชื่องานวิจัยหรือวิทยานิพนธ์
                            </a>
                        </Link>
                        <p className='text-gray-400'>รายละเอียดโดยสังเขป</p>
                        <p className='text-gray-400'>จัดทำโดย : นายโอ เค </p>
                    </div>
                    <div className='section mb-7'>
                        <Link href="/research">
                            <a className='text-blue-500 hover:text-blue-700'>
                                ชื่องานวิจัยหรือวิทยานิพนธ์
                            </a>
                        </Link>
                        <p className='text-gray-400'>รายละเอียดโดยสังเขป</p>
                        <p className='text-gray-400'>จัดทำโดย : นายโอ เค </p>
                    </div>
                    <div className='section'>
                        <Link href="/research">
                            <a className='text-blue-500 hover:text-blue-700'>
                                ชื่องานวิจัยหรือวิทยานิพนธ์
                            </a>
                        </Link>
                        <p className='text-gray-400'>รายละเอียดโดยสังเขป</p>
                        <p className='text-gray-400'>จัดทำโดย : นายโอ เค </p>
                    </div>
                </div>
        </Layout>
    )

}