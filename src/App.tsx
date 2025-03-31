import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import AsideCard from "./components/aside-cart";

function App() {
    return (
        <div
            id="app"
            className="bg-dark relative min-h-screen text-white flex flex-col"
        >
            <Nav />
            <main className="isolate">
                <Outlet />
            </main>
            <AsideCard />
        </div>
    );
}

export default App;
