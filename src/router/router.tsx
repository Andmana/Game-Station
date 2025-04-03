// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/shop";
import Homepage from "../pages/homepage";

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
                        path: "/shop",
                        element: <Shop />,
                    },
                ],
            },
        ],
    },
]);

export default router;
