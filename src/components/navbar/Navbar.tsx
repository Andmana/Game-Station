import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import NavigationLink from "../navigation/NavigationLink";
import NavbarSearch from "../navbar-search/NavbarSearch";
import ButtonWrapper from "../button-wrapper/ButtonWrapper";

import logoImg from "../../assets/images/logo.png";
import iconCart from "../../assets/images/icon-cart.svg";

const Navbar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
        <motion.div
            className="fixed w-full"
            initial={{ y: 0 }}
            animate={{ y: scrollingDown ? -80 : 0 }} // Hide navbar when scrolling down
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <nav className="main-padding flex justify-between items-center gap-2.5">
                <NavigationLink to={"/"}>
                    <img
                        src={logoImg}
                        className="w-8 h-8"
                        aria-hidden="true"
                        alt=""
                    />
                    <span className="text-xl md:text-2xl font-bold w-0 h-0 sm:h-fit sm:w-fit overflow-hidden">
                        GAME STATION
                    </span>
                </NavigationLink>

                <NavbarSearch classProp="flex-1 max-w-[500px]" />

                <ButtonWrapper>
                    <img
                        className="w-8 h-8"
                        src={iconCart}
                        alt="submit search"
                    />
                </ButtonWrapper>
            </nav>
        </motion.div>
    );
};

export default Navbar;
