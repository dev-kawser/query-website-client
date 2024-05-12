import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import TBody from "./TBody";


const MyRecommendation = () => {

    const { user } = useContext(AuthContext);
    const [MyRecommendation, setMyRecommendation] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myRecommendation/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyRecommendation(data);
            });
    }, [user]);

    return (
        <div>
            <div className="container mt-5 p-2 mx-auto sm:p-4 lg:min-h-[400px]">
                <h2 className="mb-4 text-2xl font-bold leading-tight fira-sans">Recommendation By Me</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Product Name</th>
                                <th className="p-3">Recommended Product Name</th>
                                <th className="p-3">Recommendation Title</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Recommender Email</th>
                                <th className="p-3 text-right"></th>
                            </tr>
                        </thead>
                        {
                            MyRecommendation.map(mr => <TBody setMyRecommendation={setMyRecommendation} MyRecommendation={MyRecommendation} key={mr._id} mr={mr}></TBody> )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRecommendation;