/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/ContextProvider";

const FeedbackInfo = () => {
    const { register, handleSubmit, reset, setValue } = useForm();
    const [rating, setRating] = useState("");
    const { user } = useContext(AuthContext);

    const handleRatingChange = (value) => {
        setValue("rating", value);
        setRating(value);
    };

    const onSubmit = (data) => {
        if (!data.message.trim()) {
            toast.error("Message cannot be empty");
            return;
        }

        const reviewData = {
            email: user.email,
            name: user.displayName,
            image: user.photoURL,
            reviewData: data,
            date: new Date().toISOString().split('T')[0]
        };

        axios.post('https://smart-tech-spot-server.vercel.app/reviews', reviewData)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                    setRating("");
                    toast.success("Review added successfully");
                }
            })
            .catch(err => {
                toast.error("Failed to add review");
            });
    };

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 text-gray-800">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">
                        {Array.from({ length: 5 }, (_, index) => index + 1).map(star => (
                            <button
                                type="button"
                                title={`Rate ${star} stars`}
                                aria-label={`Rate ${star} stars`}
                                onClick={() => handleRatingChange(star.toString())}
                                key={star}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-10 h-10 ${rating >= star ? "text-yellow-700" : "text-gray-400"}`}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <textarea
                        rows="3"
                        {...register("message")}
                        placeholder="Message..."
                        className="p-4 rounded-md resize-none text-gray-800"
                    ></textarea>
                    {user ? (
                        <button
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                            className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
                        >
                            Leave feedback
                        </button>
                    ) : (
                        <button
                            disabled
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                            className="py-4 btn my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-violet-600"
                        >
                            Leave feedback
                        </button>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <a
                    rel="noopener noreferrer"
                    className="text-sm dark:text-gray-600"
                >
                    Maybe later
                </a>
            </div>
        </div>
    );
};

export default FeedbackInfo;
