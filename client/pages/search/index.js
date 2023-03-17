import Layout from '/components/layouts'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout>
            <div className='bg-white rounded-lg p-5 mb-5 drop-shadow-md mx-auto max-w-6xl'>
                <p className="text-lg">ค้นหาโครงงานและงานวิจัย</p>
                <hr className="mb-3 h-px bg-black border-0"></hr>
                <div className='input-group mb-3'>
                    <span className="block font-medium text-slate-700">ชื่อโครงงานหรืองานวิจัย หรือคำที่เกี่ยวข้อง</span>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm" />
                </div>
                <div className='input-group mb-3'>
                    <span className="block font-medium text-slate-700">รายชื่อผู้จัดทำโครงงาน</span>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4">
        

                <div className="input-group mb-3">
                        <span className="block font-medium text-slate-700">ประเภทของโครงงาน</span>
                        <select className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected>กรุณาเลือกประเภท</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>


                    <div className="input-group mb-3">
                        <span className="block font-medium text-slate-700">ปีที่เผยแพร่</span>
                        <select className="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected> กรุณาเลือกปีการศึกษา</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
        
                <div className='flex justify-center'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        ค้นหา
                    </button>
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