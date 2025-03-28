import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuItems from "./MenuItems";
import { useState } from "react";

const QuickNavigation = () => {
    const [isOpen, toggleOpen] = useState(false);
    console.log(isOpen);

    return (
        <motion.div
            className="absolute z-20 h-screen flex justify-start items-center"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <div className="relative mb-10 md:mt-10 md:mb-0 flex items-center main-padding">
                <MenuToggle
                    toggleOpen={() => toggleOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <MenuItems isOpen={isOpen} />
            </div>
        </motion.div>
    );
};

export default QuickNavigation;
