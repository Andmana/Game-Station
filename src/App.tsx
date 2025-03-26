import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <div
            id="app"
            className="bg-dark relative min-h-screen text-white flex flex-col"
        >
            <Navbar />
            <main></main>
        </div>
    );
}

export default App;
