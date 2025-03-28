import ButtonWrapper from "../button-wrapper/ButtonWrapper";
import NavigationLink from "../navigation/NavigationLink";
import { motion } from "framer-motion";

import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";

const menuItems = [
    { to: "/", label: "Random Game", customClass: "-translate-x-[20px]" },
    { to: "/", label: "Go to Shop", customClass: "ms-[60px]" },
    { to: "/", label: "All Time Top", customClass: "ms-[100px]" },
    { to: "/", label: "Best of the Year", customClass: "ms-[60px]" },
    { to: "/", label: "Last 30 Days", customClass: "-translate-x-[20px]" },
];

const QuickNavigation = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className="h-screen flex justify-start items-center">
            <div className="relative mt-10 flex items-center main-padding">
                <div className="absolute z-10 border-2 border-white   h-[400px] w-[400px] rounded-[50%] transform -translate-x-2/5 "></div>
                <div className="relative z-20 bg-black ">
                    <ButtonWrapper onClick={() => setShowNav((prev) => !prev)}>
                        <motion.img
                            src={iconClose}
                            aria-hidden="true"
                            className="w-8 h-8 relative"
                            whileHover={{ rotate: "360deg" }}
                            transition={{ duration: 0.4 }}
                        />
                    </ButtonWrapper>
                </div>
                <motion.ul
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                        showNav
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full z-20 flex  flex-col justify-center items-stretch gap-12 text-black origin-left"
                >
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            className={`w-[250px] bg-[#ffffff80] transform ${item.customClass}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={
                                showNav
                                    ? { scale: 1, opacity: 1, y: 0 }
                                    : { scale: 0, opacity: 0, y: -20 }
                            }
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <NavigationLink to={item.to}>
                                {item.label}
                            </NavigationLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
};

export default QuickNavigation;
