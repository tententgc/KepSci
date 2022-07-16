import Link from 'next/link'
import { useState } from 'react'

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link className="text-xl font-semibold" href="/">LOGO</Link>
            </div>
            <div className="flex flex-col pt-10">
                <Link href="/">
                    <a className="text-xl font-normal mx-16 py-2" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        หน้าแรก
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
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="text-2xl font-semibold">LOGO</a>
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

                <div className="hidden md:flex">
                    <Link href="/">
                        <a className="text-l font-normal mx-5 py-2"> Home </a> 
                    </Link>
                    <Link href="/project">
                        <a className="text-l font-normal mx-5 py-2"> Project </a> 
                    </Link>
                    <Link href="/login">
                        <button type="button" 
                            className="mx-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Login</button>
                        {/* <a className="text-l font-normal mx-5 py-2">Login</a> */}
                    </Link>
                </div>
            </div>
        </nav>
    )
}