const Navbar = () => {
    return (
        <nav>
            <div className="nav-container flex justify-between items-center p-4">
                <a href="/">Home</a>
                <div className="relative w-auto">
                    <input
                        type="text"
                        className=" py-0.5 px-2 rounded-md bg-white text-black w-sm focus:outline-none "
                        placeholder="Search games..."
                    />
                </div>
                <div>
                    <button>Chart</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
