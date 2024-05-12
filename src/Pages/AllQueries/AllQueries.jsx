import { useLoaderData } from "react-router-dom";
import AllQueriesCard from "./AllQueriesCard";
import { useState } from "react";
import { BsLayoutSidebarReverse } from "react-icons/bs";


const AllQueries = () => {

    const allQueries = useLoaderData()

    const [isGrid, setIsGrid] = useState(true);

    const toggleLayout = () => {
        setIsGrid(!isGrid);
    };




    return (
        <div className="my-10 container mx-auto">

            <h2 className="text-5xl font-bold text-center">Queries</h2>

            <div>
                <button onClick={toggleLayout} className="text-2xl mx-2"><BsLayoutSidebarReverse /></button>
            </div>

            <div className={`${isGrid ? 'grid lg:grid-cols-3 gap-12' : ''} grid grid-cols-1 p-1 container mx-auto mt-10 gap-12`}>

                {
                    allQueries.map((data) => <AllQueriesCard data={data} key={data._id}></AllQueriesCard>)
                }
            </div>
        </div>
    );
};

export default AllQueries;