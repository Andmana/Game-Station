import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonWrapperProps {
    children: ReactNode;
    onClick?: () => void;
}

const ButtonWrapper = ({ children, onClick }: ButtonWrapperProps) => {
    return (
        <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <button
                className="flex items-center justify gap-1.5"
                onClick={onClick}
            >
                {children}
            </button>
        </motion.div>
    );
};

export default ButtonWrapper;
