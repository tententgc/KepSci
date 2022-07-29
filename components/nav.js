import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container py-3 mx-auto sm:flex">
                <button className="navbar-toggler sm:hidden rounded-md px-3 py-1 border border-solid mb-2" type="button">
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </button>
                <ul className="navbar-nav sm:flex mr-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">หน้าแรก</a>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav sm:flex">
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link">เข้าสู่ระบบ</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}