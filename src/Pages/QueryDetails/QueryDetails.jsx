import { useLoaderData } from "react-router-dom";


const QueryDetails = () => {

    const singleQuery = useLoaderData();
    console.log(singleQuery);
    
    return (
        <div>

        </div>
    );
};

export default QueryDetails;