import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import {useState} from 'react';

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const active = event => {
        setIsActive(current => !current);
    }
    return (
        <nav className="navbar bg-white">
            <div className="container py-3 mx-auto sm:flex md:px-5">
                <button className="navbar-toggler sm:hidden rounded-md px-3 py-1 border border-solid" type="button" onClick={active}>
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </button>
                <div className="ml-auto">
                    <ul className={"navbar-nav sm:flex" + (isActive ?  "flex-col" : " hidden")}>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">หน้าแรก</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link">เข้าสู่ระบบ</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}