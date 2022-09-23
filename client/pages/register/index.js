import Layout from '/components/layouts'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className='login-card mx-auto drop-shadow-md'>
        <p className='text-center text-2xl font-semibold mb-3'>สมัครบัญชีผู้ใช้งาน</p>
        <form>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">ชื่อผู้ใช้งาน</span>
            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">รหัสผ่าน</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">รหัสผ่านยืนยัน</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-2'>
            <Link href="/login">
              <a className='transition duration-75 mb-5 text-blue-500 hover:text-blue-700'>มีบัญชีเรียบร้อยแล้ว?</a>
            </Link>
          </div>
          <button className='transition duration-75 block px-3 py-2 w-full mb-3 rounded-md bg-blue-500 text-white hover:bg-blue-600'>สมัครบัญชีผู้ใช้งาน</button>
        </form>
      </div>
    </Layout>
  )

}