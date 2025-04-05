import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import ShopNav from "../../components/shop-nav";
import GamesGalery from "../../components/GamesGalery";

export async function loader({ params }: LoaderFunctionArgs) {
    const filters = params.filters;
    if (typeof filters === "string") {
        return filters;
    } else {
        return "";
    }
}

const Shop = () => {
    const filters = useLoaderData() as string;

    return (
        <div className="flex gap-8 main-padding">
            <ShopNav />
            <GamesGalery filters={filters} />
        </div>
    );
};

export default Shop;
