import Layout from '/components/layouts'

export default function Project() {
  return (
    <Layout>
      <div className='max-w-screen-md mx-auto'>
        <div className='section mb-10'>
          <p className='mt-10'>What are you looking?</p>
          <input type="text" className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md text-sm rounded-2xl" placeholder='Search'/>
        </div>
        <div className='section'>
          <div class="grid grid-cols-3 gap-4">
            <div class="...">05</div>
            <div class="col-span-2 ...">04</div>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}