import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavigationLinkProps {
    to: string;
    children: ReactNode;
}

const NavigationLink = ({ to, children }: NavigationLinkProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link to={to} className="flex items-center justify gap-1.5">
                {children}
            </Link>
        </motion.div>
    );
};

export default NavigationLink;
