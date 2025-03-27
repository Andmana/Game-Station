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
                    <span
                        className="w-10 h-10 bg-cover bg-center bg-no-repeat "
                        style={{ backgroundImage: `url(${logoImg})` }}
                    ></span>
                    <span className="text-xl md:text-2xl font-bold w-0 h-0 sm:h-fit sm:w-fit overflow-hidden">
                        GAME STATION
                    </span>
                </NavigationLink>

                <NavbarSearch />

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
