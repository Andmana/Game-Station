import logoImg from "../assets/images/logo.png";
import iconCart from "../assets/images/icon-cart.svg";
import { Link } from "react-router-dom";
import NavbarSearch from "./navbar-search/NavbarSearch";

const Navbar = () => {
    return (
        <nav className="fixed z-10 top-0 left-0  w-full">
            <div className="nav-container main-padding flex justify-between items-center p-4 ">
                <Link to="/" className="flex-1/4 flex items-center gap-1.5">
                    <span
                        className="w-10 h-10 bg-cover bg-center bg-no-repeat "
                        style={{ backgroundImage: `url(${logoImg})` }}
                    ></span>
                    <div className="lg:text-2xl font-bold w-0 sm:w-fit overflow-hidden">
                        GAME STATION
                    </div>
                </Link>
                <NavbarSearch />
                <div className="flex-1/4 flex justify-end">
                    <button className=" w-8 h-8 ">
                        <img
                            className="w-8 h-8"
                            src={iconCart}
                            alt="submit search"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
