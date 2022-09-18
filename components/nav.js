import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import {useState} from 'react';
import Image from 'next/image'
import logo from '/images/logo_math.png'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const active = event => {
        setIsActive(current => !current);
    }
    return (
        <>
            <div className="bar">
                <div className="container py-2 mx-auto md:flex md:px-5">
                    <div class="ml-auto">
                        <Link href="/login">
                            <a className="bar-link">เข้าสู่ระบบ</a>
                        </Link>
                    </div>
                </div>
            </div>
            
            <nav className="navbar sticky top-0">
                <div className="container py-3 mx-auto md:flex md:px-5">
                    <div className="grid grid-flow-col auto-cols-2">
                        <div className="col-span-4 flex items-center">
                            <Image
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <div className="flex items-center">
                            <button className="navbar-toggler md:hidden rounded-md px-3 py-1" type="button" onClick={active}>
                                <FontAwesomeIcon icon={faBars} size="lg"/>
                            </button>
                        </div>
                    </div>
                    <div className="navbar-item ml-auto">
                        <ul className={"navbar-nav md:flex " + (isActive ?  "flex-col" : "hidden")}>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link">หน้าแรก</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}