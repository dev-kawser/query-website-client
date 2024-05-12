import Lottie from "lottie-react";
import errorAnimation from "../../assets/error.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="lg:h-[500px] lg:w-[500px] lg:mt-10 container mx-auto">
            <Lottie animationData={errorAnimation}></Lottie>
            <div>
                <section className="flex items-center -mt-10 h-full sm:p-16">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                        <p className="text-4xl font-bold ">Sorry, we unable to find this page</p>
                        <Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ErrorPage;