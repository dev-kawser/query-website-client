import { useLoaderData } from "react-router-dom";
import AllQueriesCard from "./AllQueriesCard";


const AllQueries = () => {

    const allQueries = useLoaderData()
    console.log(allQueries);


    return (
        <div className="my-10">

            <h2 className="text-5xl font-bold text-center">Queries</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 p-1 container mx-auto mt-10 gap-12">
                {
                    allQueries.map((data) => <AllQueriesCard data={data} key={data._id}></AllQueriesCard>)
                }
            </div>
        </div>
    );
};

export default AllQueries;