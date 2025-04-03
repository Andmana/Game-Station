import ShopNavGroup from "./ShopNavGroup";
import { ShopNavList } from "./ShopNavList";

const ShopNav = () => {
    return (
        <nav className="w-full md:w-[280px] h-screen  main-padding md:!pt-[75px] md:!pb-[30px] ">
            <div
                style={{ scrollbarWidth: "none" }}
                className="w-full h-full overflow-auto scrollbar flex flex-col gap-6 "
            >
                <h2 className="!text-2xl">HOME</h2>
                <h2 className="mb-2 !text-2xl">SHOP</h2>

                {ShopNavList.map((navGroup, index) => (
                    <ShopNavGroup key={index} navGroup={navGroup} />
                ))}
            </div>
        </nav>
    );
};

export default ShopNav;
