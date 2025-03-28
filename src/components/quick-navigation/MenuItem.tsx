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
            className={`w-[250px] bg-[#ffffff80] transform ${item.customClass}`}
        >
            <NavigationLink to={item.to}>{item.label}</NavigationLink>
        </motion.li>
    );
};

export default MenuItem;
