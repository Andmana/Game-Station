import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    customClass?: string;
}

const SectionWrapper = ({ children, customClass }: SectionWrapperProps) => {
    return (
        <motion.div
            className={`${customClass} relative h-screen w-full flex items-stretch justify-center overflow-hidden`}
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
