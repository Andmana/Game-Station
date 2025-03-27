import logoImg from "../assets/images/logo.png";
import iconSearch from "../assets/images/icon-search.svg";
import iconCart from "../assets/images/icon-cart.svg";

const Navbar = () => {
    return (
        <nav className="sticky z-10 top-0 left-0  w-full">
            <div className="nav-container main-padding flex justify-between items-center p-4 ">
                <a href="/" className="flex-1/4 flex items-center gap-1.5">
                    <span
                        className="w-10 h-10 bg-cover bg-center bg-no-repeat "
                        style={{ backgroundImage: `url(${logoImg})` }}
                    ></span>
                    <div className="text-xl md:text-2xl font-bold w-0 sm:w-fit overflow-hidden">
                        GAME STATION
                    </div>
                </a>
                <div className="flex-2/4 relative flex items-center justify-center">
                    <div className="relative w-auto flex items-center">
                        <input
                            type="text"
                            className="py-0.5 px-2 rounded-md bg-white text-black min-w-[250] focus:outline-none"
                            placeholder="Search games..."
                        />
                        <button className="w-6 h-6 absolute right-2 z-10">
                            <img
                                className="w-6 h-6"
                                src={iconSearch}
                                alt="submit search"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex-1/4 flex justify-end">
                    <button className=" w-8 h-8 ">
                        <img
                            className="w-8 h-8"
                            src={iconCart}
                            alt="submit search"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
