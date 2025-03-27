import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
    return (
        <div
            id="app"
            className="bg-dark relative min-h-screen text-white flex flex-col"
        >
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
