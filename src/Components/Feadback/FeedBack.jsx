// import { useState } from "react";
// import Ratings from "./Ratings";

import FeedbackInfo from "./FeedbackInfo";

const FeedBack = () => {


    return (
        <div>
            <section className="container mx-auto mb-10 rounded-xl">
                <div className="bg-black text-white py-5 rounded-xl">
                    <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 p-8">
                            <p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">REVIEW</p>
                            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Leave us a feedback!</p>
                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                Please provide your valuable feedback and something something ...
                            </p>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/3 justify-center">
                            <div className="container w-full px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                                            <FeedbackInfo></FeedbackInfo>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FeedBack;
