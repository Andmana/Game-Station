import { ShopNavItems } from "./ShopNavItems";

const ShopNav = () => {
    return (
        <nav className="w-full md:w-[280px] main-padding mt-[100px]">
            {ShopNavItems.map((navGroup, index) => (
                <div key={index}> {navGroup.name}</div>
            ))}
        </nav>
    );
};

export default ShopNav;
