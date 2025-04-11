import { useLoaderData, useLocation } from "react-router-dom";
import ShopNav from "../../components/shop-nav";
import { queryConfig } from "../../utils/queryParams";
import GamesGalery from "../../components/GamesGalery";

const Shop = () => {
    const filters = useLoaderData() as string;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");

    const { name, hasSort, queryParams } = queryConfig[filters];

    return (
        <div className="flex gap-8 main-padding">
            <ShopNav />
            <GamesGalery
                header={name}
                hasSort={hasSort}
                queryParams={{
                    ...queryParams,
                    page_size: "15",
                    search: search ?? "",
                }}
                isReleased={filters != "upcoming"}
            />
        </div>
    );
};

export default Shop;
