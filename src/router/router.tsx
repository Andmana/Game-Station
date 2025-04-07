import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/shop";
import Homepage from "../pages/homepage";
import { loader as shopLoader } from "../pages/shop/loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                children: [
                    {
                        path: "/",
                        element: <Homepage />,
                    },
                    {
                        // This handles "/shop" with no parameter
                        path: "/shop",
                        index: true,
                        element: <Shop />,
                        loader: shopLoader,
                    },
                    {
                        path: "/shop/:filters",
                        index: true,
                        element: <Shop />,
                        loader: shopLoader,
                    },
                ],
            },
        ],
    },
]);

export default router;
