import Navbar from "./components/Navbar.tsx";
import Homepage from "./pages/Homepage.tsx";

function App() {
    return (
        <div
            id="app"
            className="bg-dark relative min-h-screen text-white flex flex-col"
        >
            <Navbar />
            <main className="flex-1 flex">
                <Homepage />
            </main>
        </div>
    );
}

export default App;
