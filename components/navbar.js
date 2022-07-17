import Link from 'next/link'
import { useState } from 'react'

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">KepSci</Link>
            </div>
            <div className="flex flex-col pt-10">
                <Link href="/">
                    <a className="text-xl font-normal mx-16 py-2" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Home
                    </a>
                </Link>
                <Link href="/project">
                    <a className="text-xl font-normal mx-16 py-2" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Project
                    </a>
                </Link>
                <Link href="/login">
                    <a className="text-xl font-normal mx-16 py-2" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Login
                    </a>
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter  border-gray-200  bg-white px-3 py-3 h-19 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="self-center text-xl font-semibold whitespace-nowrap dark">KepSci</a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" id="navbar-cta">
                    <Link href="/">
                        <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"> Home </a> 
                    </Link>
                    <Link href="/project">
                        <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"> Project </a> 
                    </Link>
                    <Link href="/login">
                        <button type="button" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}