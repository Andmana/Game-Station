import { useLoaderData } from "react-router-dom";
import ShopNav from "../../components/shop-nav";
import { queryConfig } from "../../utils/queryParams";
import GamesGalery from "../../components/GamesGalery";
import { useEffect, useState } from "react";

const Shop = () => {
    const filters = useLoaderData() as string;
    const [queryParams, setQueryParams] = useState<Record<string, string>>({});
    const [header, setHeader] = useState("");
    const [hasSort, setHasSort] = useState(true);
    const [isReleased, setIsReleased] = useState(true);

    const handleSortOrderChange = (order: string) => {
        setQueryParams({ ...queryParams, ordering: order });
    };

    useEffect(() => {
        const {
            name,
            hasSort,
            queryParams: _queryParams,
        } = queryConfig[filters];
        setHeader(name);
        setHasSort(hasSort);
        setQueryParams({
            ..._queryParams,
            page_size: "15",
        });
        setIsReleased(filters != "upcoming");
    }, [filters]);

    return (
        <div className="flex gap-8 main-padding">
            <ShopNav />
            <GamesGalery
                handleSortOrderChange={handleSortOrderChange}
                header={header}
                hasSort={hasSort}
                queryParams={queryParams}
                isReleased={isReleased}
            />
        </div>
    );
};

export default Shop;
