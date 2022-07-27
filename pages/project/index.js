import Link from 'next/link'
import Layout from '/components/layouts'

export default function Project() {
  return (
    <Layout>
      <div className='max-w-screen-lg mx-auto'>
        <div className='card bg-gray-300 mb-5 p-4 rounded-md border'>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Title or Header</span>
            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
        </div>
        <div className='section'>
          <div className='card p-3 mb-3 border-b-2 border-b-gray-300'>
            <Link href="/project/0972">
              <a className='text-blue-700 font-semibold text-lg hover:text-blue-500'>Coronavirus Drug Discovery</a>
            </Link>
            <p className='text-gray-500'>Coronavirus Drug Discovery: SARS-CoV-2 (Covid 19) Prevention, Diagnosis, and Treatment presents comprehensive information on antiviral drug discovery from medicinal plants, animals ... </p>
            <p className='text-gray-500'><span className='font-semibold'>Public by : </span>Username</p>
          </div>
          <div className='card p-3 mb-3 border-b-2 border-b-gray-300'>
            <Link href="/project/0973">
              <a className='text-blue-700 font-semibold text-lg hover:text-blue-500'>Coronavirus Drug Discovery</a>
            </Link>
            <p className='text-gray-500'>Coronavirus Drug Discovery: SARS-CoV-2 (Covid 19) Prevention, Diagnosis, and Treatment presents comprehensive information on antiviral drug discovery from medicinal plants, animals ... </p>
          </div>
          <div className='card p-3 mb-3 border-b-2 border-b-gray-300'>
            <Link href="/project/0974">
              <a className='text-blue-700 font-semibold text-lg hover:text-blue-500'>Coronavirus Drug Discovery</a>
            </Link>
            <p className='text-gray-500'>Coronavirus Drug Discovery: SARS-CoV-2 (Covid 19) Prevention, Diagnosis, and Treatment presents comprehensive information on antiviral drug discovery from medicinal plants, animals ... </p>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}