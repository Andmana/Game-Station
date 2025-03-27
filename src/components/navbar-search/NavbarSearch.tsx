import { useState } from "react";
import { motion } from "framer-motion";

import iconSearch from "../../assets/images/icon-search.svg";

interface NavbarSearchProp {
    classProp?: string;
}

const NavbarSearch = ({ classProp }: NavbarSearchProp) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div
            className={`${classProp} flex-1 max-w-[500px] relative flex items-center justify-center`}
        >
            <motion.div
                className="relative flex items-center  w-full"
                initial={{ width: "200px" }}
                animate={{ width: isFocused ? "90%" : "200px" }}
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
