import { LoaderFunctionArgs } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
    const filters = params.filters;
    if (typeof filters === "string") {
        return filters;
    } else {
        return "default";
    }
}
