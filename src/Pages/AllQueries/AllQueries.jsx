import { useLoaderData } from "react-router-dom";
import AllQueriesCard from "./AllQueriesCard";
import { useState } from "react";

const AllQueries = () => {
    const allQueries = useLoaderData();
    const [isGrid, setIsGrid] = useState(true);
    const [searchText, setSearchText] = useState("");

    const toggleLayout = () => {
        setIsGrid(!isGrid);
    };

    const toggleLayout2 = () => {
        setIsGrid(!isGrid);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const filteredQueries = allQueries.filter((query) =>
        query.productName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="my-10 container mx-auto">
            <h2 className="text-5xl overpass text-blue-400 font-bold text-center">Queries</h2>

            <div className="flex flex-col lg:flex-row gap-2 justify-between mx-2 mt-5">
                <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchText}
                    onChange={handleSearchChange}
                    className="border-2 border-gray-200 rounded px-4 py-2 mr-4"
                />
                <div className="text-sm leading-none border-2 border-gray-200 rounded-full inline-flex">
                    <button
                        onClick={toggleLayout2}
                        className={`inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 ${isGrid ? "active" : ""
                            }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="fill-current w-4 h-4 mr-2"
                        >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                        </svg>
                        <span>Grid</span>
                    </button>
                    <button
                        onClick={toggleLayout}
                        className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="fill-current w-4 h-4 mr-2"
                        >
                            <line x1="8" y1="6" x2="21" y2="6"></line>
                            <line x1="8" y1="12" x2="21" y2="12"></line>
                            <line x1="8" y1="18" x2="21" y2="18"></line>
                            <line x1="3" y1="6" x2="3.01" y2="6"></line>
                            <line x1="3" y1="12" x2="3.01" y2="12"></line>
                            <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                        <span>List</span>
                    </button>
                </div>
            </div>

            <div
                className={`${isGrid ? "grid lg:grid-cols-3 gap-12" : ""
                    } grid grid-cols-1 p-1 container mx-auto mt-10 gap-12`}
            >
                {filteredQueries.map((data) => (
                    <AllQueriesCard data={data} key={data._id}></AllQueriesCard>
                ))}
            </div>
        </div>
    );
};

export default AllQueries;
