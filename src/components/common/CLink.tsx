import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transitionConfig } from "./modules";

interface NavigationLinkProps {
    to: string;
    children: ReactNode;
}

const CLink = ({ to, children }: NavigationLinkProps) => {
    return (
        <motion.div {...transitionConfig}>
            <Link
                draggable={false}
                to={to}
                className="flex items-center justify-center gap-1.5 font-semibold py-1"
            >
                {children}
            </Link>
        </motion.div>
    );
};

export default CLink;
