import { useEffect, useRef, useState } from "react";
import iconCheck from "../../assets/images/icon-check.svg";
import { motion } from "framer-motion";

const dropDownList = [
    { name: "Relevance", ordering: "-relevance" },
    { name: "Date Added", ordering: "-created" },
    { name: "Name", ordering: "name" },
    { name: "Release Date", ordering: "-released" },
    { name: "Popularity", ordering: "-added" },
];

interface SortDropDownProps {
    currentSort: string;
    handleSortOrderChange: (order: string) => void;
}

const SortDropDown = ({
    currentSort,
    handleSortOrderChange,
}: SortDropDownProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-3xs bg-white rounded-xl text-black px-3 pt-2 pb-2 text-start">
            <button
                onClick={() => setIsVisible(!isVisible)} // Toggle visibility correctly
                className="w-full text-start"
            >
                Sort By:{" "}
                <span className="font-semibold">
                    {
                        dropDownList.find(
                            (item) => item.ordering === currentSort
                        )?.name
                    }
                </span>
            </button>
            {isVisible && ( // Conditionally render the dropdown
                <motion.div
                    ref={dropdownRef}
                    className="absolute top-0 left-0 mt-1 w-full bg-white rounded-xl shadow-md z-10"
                >
                    <ul className="flex flex-col gap-2 p-2">
                        {dropDownList.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => {
                                        setIsVisible(false);
                                        handleSortOrderChange(item.ordering);
                                    }}
                                    className="w-full text-left hover:bg-gray-100 p-2 rounded-md flex items-center gap-2"
                                >
                                    <span
                                        className={`${
                                            item.ordering === currentSort
                                                ? "text-neutral-950 font-semibold"
                                                : "text-neutral-700"
                                        } `}
                                    >
                                        {item.name}
                                    </span>
                                    {item.ordering === currentSort && (
                                        <img
                                            className="w-4 h-4 object-cover object-center"
                                            src={iconCheck}
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default SortDropDown;
