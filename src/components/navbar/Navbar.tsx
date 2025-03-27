import { motion } from "framer-motion";

import NavigationLink from "../navigation/NavigationLink";
import NavbarSearch from "../navbar-search/NavbarSearch";
import ButtonWrapper from "../button-wrapper/ButtonWrapper";

import logoImg from "../../assets/images/logo.png";
import iconCart from "../../assets/images/icon-cart.svg";

const Navbar = () => {
    return (
        <motion.div className="fixed w-full">
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
