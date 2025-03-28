import { useCycle } from "framer-motion";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuItems from "./MenuItems";
import { useState } from "react";

const QuickNavigation = () => {
    const [isOpen, toggleOpen] = useState(false);
    console.log(isOpen);

    return (
        <motion.div
            className="h-screen flex justify-start items-center"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <div className="relative mt-10 flex items-center main-padding">
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
