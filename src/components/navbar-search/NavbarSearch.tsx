import { useState } from "react";
import { motion } from "framer-motion";

import iconSearch from "../../assets/images/icon-search.svg";

const NavbarSearch = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="flex-2/4 relative flex items-center justify-center">
            <motion.div
                className="relative flex items-center  max-w-[400px] w-full"
                initial={{ width: "180px" }}
                animate={{ width: isFocused ? "100%" : "180px" }}
                transition={{
                    duration: 0.15,
                    type: "spring",
                    damping: 20,
                    stiffness: 300,
                }}
            >
                <input
                    type="text"
                    className="py-0.5 px-2 rounded-md bg-white text-black w-full focus:outline-none"
                    placeholder="Search games..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

                <button className="w-6 h-6 absolute right-2 z-10">
                    <img
                        className="w-6 h-6"
                        src={iconSearch}
                        alt="submit search"
                    />
                </button>
            </motion.div>
        </div>
    );
};

export default NavbarSearch;
