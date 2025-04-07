import { useLoaderData } from "react-router-dom";
import ShopNav from "../../components/shop-nav";
import { queryConfig } from "../../utils/queryParams";
import GamesGalery from "../../components/GamesGalery";
import { useEffect, useState } from "react";

const Shop = () => {
    const filters = useLoaderData() as string;
    const { name, hasSort, queryParams: _queryParams } = queryConfig[filters];

    const [queryParams, setQueryParams] = useState({ ..._queryParams });
    const handleSortOrderChange = (order: string) => {
        setQueryParams({ ..._queryParams, ordering: order });
    };

    useEffect(() => {
        setQueryParams({
            ..._queryParams,
            page_size: "15",
        });
    }, [filters]);

    return (
        <div className="flex gap-8 main-padding">
            <ShopNav />
            <GamesGalery
                handleSortOrderChange={handleSortOrderChange}
                header={name}
                hasSort={hasSort}
                queryParams={queryParams}
            />
        </div>
    );
};

export default Shop;
