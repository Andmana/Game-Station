import { useState } from "react";

const dropDownList = [
    { name: "Relevance", ordering: "-relevance" },
    { name: "Date Added", ordering: "-created" },
    { name: "Name", ordering: "name" },
    { name: "Release Date", ordering: "-released" },
    { name: "Popularity", ordering: "-added" },
];

const SortDropDown = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative w-3xs bg-white rounded-xl text-black px-3 pt-2 pb-2 text-start">
            <button
                onClick={() => setIsVisible(!isVisible)} // Toggle visibility correctly
                className="w-full text-start"
            >
                Sort By:
            </button>
            {isVisible && ( // Conditionally render the dropdown
                <div className="absolute top-0 left-0 mt-1 w-full bg-white rounded-xl shadow-md z-10">
                    <ul className="flex flex-col gap-2 p-2">
                        {dropDownList.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="w-full text-left hover:bg-gray-100 p-2 rounded-md"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortDropDown;
