/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json"
import { AuthContext } from "../Context/ContextProvider";


const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto">
            <Lottie animationData={loadingAnimation} ></Lottie>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default ProtectedRoute;