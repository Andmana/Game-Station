import { motion, Variants } from "framer-motion";
import CLink from "../../../common/CLink";

interface NavItemProp {
    item: { to: string; label: string; customClass: string };
    variants: Variants;
}

const NavItem = ({ item, variants }: NavItemProp) => {
    return (
        <motion.li
            variants={variants}
            className={`w-[220px] bg-[#0000007d] transform ${item.customClass} border-b-2 border-white`}
        >
            <CLink to={item.to}>{item.label}</CLink>
        </motion.li>
    );
};

export default NavItem;
