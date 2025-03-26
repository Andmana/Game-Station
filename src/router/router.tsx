// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import Shop from "../pages/Shop";
import ErrorPage from "../pages/ErrorPage";

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
