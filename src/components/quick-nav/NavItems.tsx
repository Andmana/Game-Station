import { motion, Variants } from "framer-motion";
import NavItem from "./NavItem";
import { getRandomNumber } from "../../utils/random";

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

interface NavItemsProps {
    isOpen: boolean;
}

const NavItems = ({ isOpen }: NavItemsProps) => {
    const randomGameLink = `/game/${getRandomNumber()}`;

    const menuItems = [
        {
            to: randomGameLink,
            label: "Random Game",
            customClass: "md:-translate-x-[20px]",
        },
        {
            to: "/shop",
            label: "Go to Shop",
            customClass: "md:translate-x-[60px]",
        },
        {
            to: "/shop/all-time-top",
            label: "All Time Top",
            customClass: "md:translate-x-[100px]",
        },
        {
            to: "/shop/best-of-the-year",
            label: "Best of the Year",
            customClass: "md:translate-x-[60px]",
        },
        {
            to: "/shop/last-30-days",
            label: "Last 30 Days",
            customClass: "md:-translate-x-[20px]",
        },
    ];

    return (
        <motion.ul
            className="flex ms-6 md:ms-0 flex-col justify-center items-stretch gap-4 md:gap-12 origin-left"
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
                        staggerDirection: 1,
                        staggerChildren: 0.1,
                    },
                },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            initial={false}
        >
            {menuItems.map((item, index) => (
                <NavItem item={item} variants={itemVariants} key={index} />
            ))}
        </motion.ul>
    );
};

export default NavItems;
