import { motion, Variants } from "framer-motion";
import NavigationLink from "../navigation/NavigationLink";

interface MenuItemProp {
    item: { to: string; label: string; customClass: string };
    variants: Variants;
}

const MenuItem = ({ item, variants }: MenuItemProp) => {
    return (
        <motion.li
            variants={variants}
            className={`w-[220px] bg-[#0000007d] transform ${item.customClass} border-b-2 border-white`}
        >
            <NavigationLink to={item.to}>{item.label}</NavigationLink>
        </motion.li>
    );
};

export default MenuItem;
