import { motion } from "framer-motion";
import NavToggle from "./NavToggle";
import NavItems from "./NavItems";

interface QuickNavigationProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

const QuickNav = ({ isOpen, toggleOpen }: QuickNavigationProps) => {
    return (
        <motion.div
            className="h-screen w-full flex justify-start items-center gap-2 md:gap-0"
            initial={false}
            animate={isOpen ? "open" : "closed"}
        >
            <NavToggle isOpen={isOpen} toggleOpen={toggleOpen} />
            <NavItems isOpen={isOpen} />
        </motion.div>
    );
};

export default QuickNav;
