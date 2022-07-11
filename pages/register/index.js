import Layout from '/components/layouts'

export default function Home() {
  return (
    <Layout>
      <div className='login-card mx-auto'>
        <p className='text-center text-2xl font-semibold mb-3'>SIGN UP</p>
        <form>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Username</span>
            <input type="text"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Password</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <div className='input-group mb-3'>
            <span className="block font-medium text-slate-700">Confirm Password</span>
            <input type="password"  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"/>
          </div>
          <button className='block px-3 py-2 w-full mb-3 rounded-md bg-green-500 text-white hover:bg-green-600'>Login</button>
          <hr></hr>
        </form>
      </div>
    </Layout>
  )
}