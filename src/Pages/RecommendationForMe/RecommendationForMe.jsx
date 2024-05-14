import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import Lottie from "lottie-react";
import loadingAnimation from "../../../src/assets/loading.json"
import TBody from "./TBody";
import { Helmet } from "react-helmet";




const RecommendationForMe = () => {

    const [recommend, setRecommend] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('https://smart-tech-spot-server.vercel.app/all-recommendation')
            .then(res => res.json())
            .then(data => {
                setRecommend(data)
            })
    }, [])

    if (!user) {
        return <div className="flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto">
            <Lottie animationData={loadingAnimation} ></Lottie>
        </div>
    }

    
    const particularRecommend = recommend.filter(com => com.recommenderEmail !== com.userEmail)


    return (
        <div>

            <Helmet>
                <title>Smart Tech Spot | Recommendation For Me</title>
            </Helmet>

            <div className="container my-5 p-2 mx-auto sm:p-4 lg:min-h-[400px]">
                <h2 className="mb-4 text-2xl font-bold leading-tight text-blue-400 overpass">Recommendation For Me</h2>
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
                        <thead>
                            <tr className="text-left">
                                <th className="p-3">Product Name</th>
                                <th className="p-3">Recommended Product Name</th>
                                <th className="p-3">Recommendation Title</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Recommender Email</th>
                            </tr>
                        </thead>
                        {
                            particularRecommend.map(rm => <TBody key={rm._id} rm={rm}></TBody> )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecommendationForMe;