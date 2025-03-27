import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonWrapperProps {
    children: ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <button className="flex items-center justify gap-1.5">
                {children}
            </button>
        </motion.div>
    );
};

export default ButtonWrapper;
