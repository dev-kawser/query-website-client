import { useEffect, useState } from "react";
import RecentQueriesCard from "./RecentQueriesCard";


const RecentQueries = () => {

    const [recentQueries, setRecentQueries] = useState([]);

    const slicedRecentQueries = recentQueries.slice(0, 6);

    useEffect(() => {
        fetch('http://localhost:5000/recent-queries')
            .then(res => res.json())
            .then(data => {
                setRecentQueries(data)
            })
    }, [])

    return (
        <div className="my-20">
            <h2 className="text-5xl font-bold text-center dark:text-gray-700">Recent Queries</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 p-1 container mx-auto mt-10 gap-12">
                {
                    slicedRecentQueries.map((data) => <RecentQueriesCard data={data} key={data._id} ></RecentQueriesCard> )
                }
            </div>
        </div>
    );
};

export default RecentQueries;