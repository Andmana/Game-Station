import logoImg from "../assets/images/logo.png";
import iconCart from "../assets/images/icon-cart.svg";
import { Link } from "react-router-dom";
import NavbarSearch from "./navbar-search/NavbarSearch";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Track the scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If scrolling down, hide the navbar; if scrolling up, show it
            if (currentScrollY > lastScrollY) {
                setScrollingDown(true); // Scrolling down
            } else {
                setScrollingDown(false); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <motion.nav
            className="fixed z-10 top-0 left-0  w-full"
            initial={{ y: 0 }}
            animate={{ y: scrollingDown ? -80 : 0 }} // Hide navbar when scrolling down
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <div className="nav-container main-padding flex justify-between items-center p-4 ">
                <Link
                    to="/"
                    className="flex-1/4 flex items-center justify gap-1.5"
                >
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
        </motion.nav>
    );
};

export default Navbar;
