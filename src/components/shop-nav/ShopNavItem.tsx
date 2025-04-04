import { motion } from "framer-motion";
import { IShopNav } from "../../types/IShopNav";
import { useState } from "react";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";

interface ShopNavItemProps {
    navIitem: IShopNav;
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

const ShopNavItem = ({ navIitem }: ShopNavItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <a
                href={navIitem.redirectTo}
                className="w-full flex items-center gap-2"
            >
                <HoverableIcon isHovered={isHovered} iconSrc={navIitem.icon} />
                <span
                    className="font-semibold origin-left text-xl flex-1 h-full"
                    style={{ scale: isHovered ? 1.1 : 1 }}
                >
                    {navIitem.name}
                </span>
            </a>
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
                    className="font-semibold origin-left text-xl"
                    style={{ scale: isHovered ? 1.1 : 1 }}
                >
                    {isMinimize ? "Show more" : "Hide"}
                </span>
            </button>
        </motion.li>
    );
};

export default ShopNavItem;
