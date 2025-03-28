import { motion, Variants } from "framer-motion";
import MenuItem from "./MenuItem";

const menuItems = [
    { to: "/", label: "Random Game", customClass: "md:-translate-x-[20px]" },
    { to: "/", label: "Go to Shop", customClass: "md:translate-x-[60px]" },
    { to: "/", label: "All Time Top", customClass: "md:translate-x-[100px]" },
    {
        to: "/",
        label: "Best of the Year",
        customClass: "md:translate-x-[60px]",
    },
    { to: "/", label: "Last 30 Days", customClass: "md:-translate-x-[20px]" },
];

const itemVariants: Variants = {
    open: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },

    closed: {
        opacity: 0,
        scale: 0.3,
        transition: { duration: 0.4 },
    },
};

interface MenuItemsProps {
    isOpen: boolean;
}

const MenuItems = ({ isOpen }: MenuItemsProps) => {
    return (
        <motion.ul
            className="z-20 flex ms-5 md:ms-0 flex-col justify-center items-stretch gap-4 md:gap-12 text-black origin-left"
            variants={{
                open: {
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.5,
                        delayChildren: 0.1,
                        staggerChildren: 0.1,
                    },
                },
                closed: {
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                        when: "afterChildren",
                        staggerDirection: -1,
                        staggerChildren: 0.1,
                    },
                },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            initial={false}
        >
            {menuItems.map((item, index) => (
                <MenuItem item={item} variants={itemVariants} key={index} />
            ))}
        </motion.ul>
    );
};

export default MenuItems;
