import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import CLink from "../common/CLink";
import CButton from "../common/CButton";

import logoImg from "../../assets/images/logo.png";
import iconCart from "../../assets/images/icon-cart.svg";
import NavSearch from "./NavSearch";

interface NavProps {
    handleCartState: () => void;
}

const Nav = ({ handleCartState }: NavProps) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [prevScroll, setPrevScroll] = useState(0);

    function update(latest: number, prev: number): void {
        if (latest < prev) {
            setHidden(false);
        } else if (latest > 100 && latest > prev) {
            setHidden(true);
        }
    }

    useMotionValueEvent(scrollY, "change", (latest: number) => {
        update(latest, prevScroll);
        setPrevScroll(latest);
    });

    return (
        <motion.nav
            animate={
                hidden ? { opacity: 0, y: "-100%" } : { opacity: 1, y: "0%" }
            }
            transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.6,
                staggerChildren: 0.05,
            }}
            style={{
                backgroundColor:
                    window.location.pathname === "/"
                        ? "transparent"
                        : "#242424",
            }}
            className="fixed z-10 isolate w-full top-0 left-0 main-padding nav-shadow flex justify-between items-center gap-2.5"
        >
            {/* Hero */}
            <CLink to="/">
                <img
                    src={logoImg}
                    className="w-8 h-8"
                    aria-hidden="true"
                    alt=""
                />
                <span className="text-xl md:text-2xl font-bold w-0 h-0 sm:h-fit sm:w-fit overflow-hidden">
                    GAME STATION
                </span>
            </CLink>

            {/* Game Search */}
            <NavSearch />

            {/* Cart */}

            <CButton>
                <img
                    className="w-8 h-8"
                    src={iconCart}
                    alt="submit search"
                    onClick={handleCartState}
                />
            </CButton>
        </motion.nav>
    );
};

export default Nav;
