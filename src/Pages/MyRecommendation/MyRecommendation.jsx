import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";


const MyRecommendation = () => {

    const { user } = useContext(AuthContext);
    const [MyRecommendation, setMyReMyRecommendation] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myRecommendation/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReMyRecommendation(data);
            });
    }, [user]);

    return (
        <div>

        </div>
    );
};

export default MyRecommendation;