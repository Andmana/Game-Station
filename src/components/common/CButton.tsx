import { ReactNode } from "react";
import { motion } from "framer-motion";
import { transitionConfig } from "./modules";

interface CButtonProps {
    children: ReactNode;
    onClick?: () => void;
    customClass?: string;
}

const CButton = ({ children, onClick, customClass }: CButtonProps) => {
    return (
        <motion.button
            className={`${customClass?.toString()} flex items-center gap-1.5 font-semibold`}
            {...transitionConfig}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};
export default CButton;
