import Link from 'next/link'
import Layout from '/components/layouts'

export default function Project() {
  return (
    <Layout>
      <div className='max-w-screen-md mx-auto'>
        <div className='section mb-14'>
          <p className=''>Looking for something?</p>
          <input type="text" className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md text-sm rounded-2xl" placeholder='Search'/>
        </div>
        <div className='section'>
          <div className="grid grid-cols-5 gap-4">
            <div className="">
              
            </div>
            <div className="col-span-4">
              <Link href="/">
                <a className='text-blue-700 font-semibold text-lg hover:text-blue-600'>Header</a>
              </Link>
              <p className='text-gray-500'>Detail</p>
            </div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}