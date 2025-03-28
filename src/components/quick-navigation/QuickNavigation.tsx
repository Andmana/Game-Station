import ButtonWrapper from "../button-wrapper/ButtonWrapper";
import NavigationLink from "../navigation/NavigationLink";
import { motion } from "framer-motion";

import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";

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
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.4 },
                        }, // Stagger children animation
                    }}
                >
                    <li className="w-[250px] bg-[#ffffff] transform -translate-x-[20px] ">
                        <NavigationLink to="/">Random Game</NavigationLink>
                    </li>
                    <li className="w-[250px] bg-[#ffffff] ms-[60px]">
                        <NavigationLink to="/">Go to Shop</NavigationLink>
                    </li>
                    <li className="w-[250px] bg-[#ffffff] ms-[100px]">
                        <NavigationLink to="/">All Time Top</NavigationLink>
                    </li>
                    <li className="w-[250px] bg-[#ffffff] ms-[60px]">
                        <NavigationLink to="/">Best of the Year</NavigationLink>
                    </li>
                    <li className="w-[250px] bg-[#ffffff]">
                        <NavigationLink to="/">Last 30 Days</NavigationLink>
                    </li>
                </motion.ul>
            </div>
        </div>
    );
};

export default QuickNavigation;
