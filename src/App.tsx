import { Outlet } from "react-router-dom";
import Nav from "./components/nav";

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
        </div>
    );
}

export default App;
