import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import Lottie from "lottie-react";
import loadingAnimation from "../../../src/assets/loading.json"




const RecommendationForMe = () => {

    const [recommend, setRecommend] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/all-recommendation')
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


    const particularRecommend = recommend.filter(com => com.recommenderEmail !== user?.email)
    console.log(particularRecommend);


    return (
        <div>

        </div>
    );
};

export default RecommendationForMe;