import { motion, useCycle } from "framer-motion";
import { IShopNavGroup } from "../../types/IShopNav";
import ShopNavItem, { ExtendNavItem } from "./ShopNavItem";

interface ShopNavGroupProps {
    navGroup: IShopNavGroup;
}

const ShopNavGroup = ({ navGroup }: ShopNavGroupProps) => {
    const [isMinimize, setIsMinimize] = useCycle(true, false);
    return (
        <motion.ul className="w-full flex flex-col gap-2">
            <h2 className="mb-2 !text-2xl">{navGroup.name}</h2>
            {navGroup.shopNavs.map((navItem) => {
                if (isMinimize && navItem.id >= 3) return;
                return <ShopNavItem navItem={navItem} key={navItem.id} />;
            })}
            {navGroup.shopNavs.length > 3 && (
                <ExtendNavItem
                    key={navGroup.shopNavs.length}
                    isMinimize={isMinimize}
                    setIsMinimize={setIsMinimize}
                />
            )}
        </motion.ul>
    );
};

export default ShopNavGroup;
