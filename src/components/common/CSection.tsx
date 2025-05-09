import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CSectionProps {
    children: ReactNode;
    customClass?: string;
}

const CSection = ({ children, customClass }: CSectionProps) => {
    return (
        <motion.section
            className={`${customClass} relative h-screen w-full overflow-hidden`}
        >
            {children}
        </motion.section>
    );
};

export default CSection;
