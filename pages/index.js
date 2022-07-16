import Navbar from '/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='banner h-72 flex justify-center items-center'>
        <p className='text-center text-5xl font-semibold mb-5 text-sky-800'>Research Libraries</p>
      </div>
    </>
  )
}
