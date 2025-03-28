import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
    return (
        <motion.div className="h-screen w-full relative flex items-stretch justify-center overflow-hidden">
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
