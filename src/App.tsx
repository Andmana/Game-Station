import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
    return (
        <div
            id="app"
            className="bg-dark relative min-h-screen text-white flex flex-col"
        >
            <Navbar />
            <main className="flex-1 flex">
                <Outlet />
            </main>
        </div>
    );
}

export default App;
