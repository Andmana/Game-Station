import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Shop from "../pages/shop";
import Homepage from "../pages/homepage";
import { loader as shopLoader } from "../pages/shop/loader";
import Game from "../pages/game";
import { loader as gameLoader } from "../pages/game/loader";

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
                        element: <Shop />,
                        loader: shopLoader,
                    },
                    {
                        path: "/shop/:filters",
                        element: <Shop />,
                        loader: shopLoader,
                    },
                    {
                        path: "/game/:id",
                        element: <Game />,
                        loader: gameLoader,
                    },
                    {
                        // Redirect /game to /games
                        path: "/game",
                        element: <Navigate to="/shop" replace />,
                    },
                ],
            },
        ],
    },
]);

export default router;
