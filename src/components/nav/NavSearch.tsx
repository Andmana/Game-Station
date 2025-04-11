import { ChangeEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import iconSearch from "../../assets/images/icon-search.svg";
import { transitionConfig } from "../common/modules";
import NavSearchItem from "./NavSearchItem";
import { getMultipleGames } from "../../services/api/AllServices";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "../../pages/ErrorPage";
import Loading from "../common/Loading";
import { Navigate, useNavigate } from "react-router-dom";

const fetchGames = async (search: string) => {
    const queryParams = {
        page_size: 4,
        search: search,
        ordering: "-added",
    };
    return await getMultipleGames(queryParams);
};

const NavSearch = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // Debounce input changes to reduce API calls
    useEffect(() => {
        const debounce = setTimeout(() => setSearchTerm(inputValue), 500);
        return () => clearTimeout(debounce);
    }, [inputValue]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ["users", searchTerm],
        queryFn: () => fetchGames(searchTerm),
        enabled: !!searchTerm, // only run if there's input
    });

    const navigate = useNavigate(); // Initialize the navigate function
    const goToShop = () => {
        console.log("clicked");
        console.log("/shop?search=" + inputValue);
        navigate("/shop?search=" + inputValue); // Navigate to '/shop' with a query parameter
    };

    return (
        <div
            className={`flex-1 max-w-[500px] flex items-center justify-center`}
        >
            <motion.div
                className="flex items-center relative"
                initial={{ width: "200px" }}
                animate={{
                    width: isFocused ? "clamp(200px, 90%, 450px)" : "200px",
                }}
                transition={{
                    duration: 0.15,
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                }}
            >
                <input
                    onChange={handleInputChange}
                    value={inputValue}
                    type="text"
                    className="py-0.5 px-2 rounded-md bg-white text-black w-full focus:outline-none"
                    placeholder="Search games..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <button
                    className="w-6 h-6 absolute right-2 z-10"
                    onClick={goToShop}
                >
                    <motion.img
                        {...transitionConfig}
                        className="w-6 h-6"
                        src={iconSearch}
                        alt="submit search"
                    />
                </button>
                <AnimatePresence>
                    {/* Transition exit */}
                    {isFocused && (
                        <motion.div
                            className="absolute top-full left-0 w-full min-h-30 rounded-2xl bg-[#171717] overflow-hidden origin-top transform translate-y-4"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        >
                            {isLoading && <Loading />}
                            {error && <ErrorPage />}
                            {data && (
                                <ul className="p-4 flex flex-col gap-4">
                                    {data.map((game) => (
                                        <NavSearchItem
                                            game={game}
                                            key={game.id}
                                        />
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default NavSearch;
