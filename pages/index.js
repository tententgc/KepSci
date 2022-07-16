import Layout from '/components/layouts'

export default function Home() {
  return (
    <Layout>
      <div className='max-w-screen-sm mx-auto'>
        <p className='text-center mt-10 text-5xl font-semibold mb-5'>Research Libraries</p>
        <input type="text" className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md text-sm rounded-2xl" placeholder='Search'/>
      </div>
    </Layout>
  )
}
