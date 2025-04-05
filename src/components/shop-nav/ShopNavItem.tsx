import { motion } from "framer-motion";
import { IShopNav } from "../../types/IShopNav";
import { useState } from "react";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";
import { NavLink } from "react-router-dom";

interface ShopNavItemProps {
    navItem: IShopNav;
}

const HoverableIcon = ({
    isHovered,
    iconSrc,
}: {
    isHovered: boolean;
    iconSrc: string;
}) => (
    <motion.div
        className="w-10 h-10 p-2 rounded-xl"
        animate={{ backgroundColor: isHovered ? "#fff" : "#171717" }}
    >
        <img
            style={{
                filter: isHovered ? "brightness(0) saturate(100%)" : "none",
            }}
            src={iconSrc}
            alt=""
        />
    </motion.div>
);

const ShopNavItem = ({ navItem }: ShopNavItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-[#242424] sm:bg-white"
        >
            <NavLink
                to={"/shop" + navItem.redirectTo}
                className="w-full flex items-center gap-2 bg-white sm:bg-[#242424]"
                style={({ isActive }) => ({
                    paddingLeft: isActive ? "10px" : "0px",
                    transform: isActive ? "translateX(-10px)" : "translateX(0)", // Include padding in width
                })}
            >
                <HoverableIcon isHovered={isHovered} iconSrc={navItem.icon} />
                <span
                    className="font-semibold origin-left text-[1.1rem] flex-1 h-full"
                    style={{ scale: isHovered ? 1.1 : 1 }}
                >
                    {navItem.name}
                </span>
            </NavLink>
        </motion.li>
    );
};

export const ExtendNavItem = ({
    isMinimize,
    setIsMinimize,
}: {
    isMinimize: boolean;
    setIsMinimize: () => void;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <button onClick={setIsMinimize} className="flex items-center gap-2">
                <HoverableIcon
                    isHovered={isHovered}
                    iconSrc={isMinimize ? iconDown : iconUp}
                />
                <span
                    className="font-semibold origin-left text-[1.1rem]"
                    style={{ scale: isHovered ? 1.1 : 1 }}
                >
                    {isMinimize ? "Show more" : "Hide"}
                </span>
            </button>
        </motion.li>
    );
};

export default ShopNavItem;
