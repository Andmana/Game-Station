import { motion, useCycle } from "framer-motion";
import ShopNavGroup from "./ShopNavGroup";
import MediaQuery from "react-responsive";
import CButton from "../common/CButton";
import iconClose from "../../assets/images/icon-close.svg";
import iconOpen from "../../assets/images/icon-open.svg";
import { Link } from "react-router-dom";
import { ShopNavList } from "../../utils/shopNavList";

const HeaderLink = ({ label, to }: { label: string; to: string }) => {
    return (
        <motion.div
            className="text-2xl font-black origin-left"
            whileHover={{ scale: 1.1 }}
        >
            <Link to={to}>{label}</Link>
        </motion.div>
    );
};

const ShopNav = () => {
    return (
        <>
            <MediaQuery minWidth={641}>
                <NavMedium />
            </MediaQuery>
            <MediaQuery maxWidth={640}>
                <NavSmall />
            </MediaQuery>
        </>
    );
};

const NavMedium = () => {
    return (
        <aside className="min-w-[200px] w-[30%] max-w-[250px] h-full ">
            <nav
                style={{ scrollbarWidth: "none" }}
                className="fixed min-w-[200px] w-[30%] max-w-[250px] h-screen !pt-[65px] !pb-[45px]"
            >
                <div
                    className="w-full h-full overflow-y-scroll flex flex-col gap-6 sm:text-white"
                    style={{ scrollbarWidth: "none" }}
                >
                    <Navigation />
                </div>
            </nav>
        </aside>
    );
};

const NavSmall = () => {
    const [isVisible, setIsVisible] = useCycle(false, true);
    return (
        <motion.nav className="fixed z-20 w-full h-full pointer-events-none flex justify-center items-center text-black">
            {/* Button to toggle visibility */}
            <div className="absolute z-20 top-[90%] left-[90%] w-10 h-10 p-2 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <CButton onClick={setIsVisible}>
                    <img
                        src={isVisible ? iconClose : iconOpen}
                        alt="Toggle visibility"
                        aria-hidden={true}
                    />
                </CButton>
            </div>

            {/* Navigation link */}
            <motion.div
                className="absolute z-10 top-0 left-0 w-full h-full px-10 py-8 overflow-auto flex flex-col gap-4"
                style={{
                    scrollbarWidth: "none",
                    pointerEvents: isVisible ? "auto" : "none",
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    duration: isVisible ? 0.4 : 0,
                    delay: isVisible ? 0.4 : 0,
                }}
                initial={{ opacity: 0 }}
                aria-hidden={isVisible ? false : true}
            >
                <Navigation />
            </motion.div>

            {/* Animated background circle */}
            <motion.div
                className="absolute w-[200vh] h-[200vh] top-[90%] left-[90%] bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                animate={{
                    scale: isVisible ? 1.3 : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
            />
        </motion.nav>
    );
};

const Navigation = () => {
    return (
        <>
            <HeaderLink label="HOME" to="/" />
            <HeaderLink label="SHOP" to="/shop" />

            {ShopNavList.map((navGroup, index) => (
                <ShopNavGroup key={index} navGroup={navGroup} />
            ))}
        </>
    );
};

export default ShopNav;
