import { ReactNode } from "react";
import { motion } from "framer-motion";
import { transitionConfig } from "./modules";

interface ButtonWrapperProps {
    children: ReactNode;
    onClick?: () => void;
}

const CButton = ({ children, onClick }: ButtonWrapperProps) => {
    return (
        <motion.button
            className="flex items-center gap-1.5 font-semibold"
            {...transitionConfig}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default CButton;
