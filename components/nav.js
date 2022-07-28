import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fabars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav>
            <div class="container py-3 mx-auto flex flex-nowrap">
                <button class="navbar-toggler" type="button">
                    <FontAwesomeIcon icon={fabars} />
                </button>
                <div className="">
                    
                </div>
                <div className="">
                    
                </div>
            </div>
        </nav>
    )
}