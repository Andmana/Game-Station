import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuItems from "./MenuItems";

interface QuickNavigationProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const QuickNavigation = ({ isOpen, toggleOpen }: QuickNavigationProps) => {
    return (
        <motion.div
            className="absolute z-20 h-screen flex justify-start items-center"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <div className="relative mt-10 flex items-center main-padding">
                <MenuToggle isOpen={isOpen} toggleOpen={toggleOpen} />
                <MenuItems isOpen={isOpen} />
            </div>
        </motion.div>
    );
};

export default QuickNavigation;
