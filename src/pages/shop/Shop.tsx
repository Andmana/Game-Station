import { useLoaderData } from "react-router-dom";
import ShopNav from "../../components/shop-nav";
import { queryConfig } from "../../utils/queryParams";
import GamesGalery from "../../components/GamesGalery";

const Shop = () => {
    const filters = useLoaderData() as string;
    const { name, hasSort, queryParams } = queryConfig[filters];

    return (
        <div className="flex gap-8 main-padding">
            <ShopNav />
            <GamesGalery
                header={name}
                hasSort={hasSort}
                queryParams={{ ...queryParams, page_size: "15" }}
                isReleased={filters != "upcoming"}
            />
        </div>
    );
};

export default Shop;
