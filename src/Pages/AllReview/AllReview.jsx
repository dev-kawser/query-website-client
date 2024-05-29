import axios from "axios";
import { useEffect, useState } from "react";
import AllReviewCard from "./AllReviewCard";

const AllReview = () => {
    const [review, setReview] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get('https://smart-tech-spot-server.vercel.app/reviews')
            .then(res => {
                setReview(res.data);
            });
    }, []);

    const sliceReview = review.slice(0, 6);

    const handleShowAllClick = () => {
        setShowAll(true);
    };

    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-5xl font-bold text-center overpass">All <span className="text-blue-400">Reviews</span> Here</h2>
            <hr />
            <div className=" mt-10 grid gap-10 grid-cols-1 lg:grid-cols-3">
                {
                    showAll ?
                        review.map(data => (
                            <AllReviewCard
                                key={data._id}
                                data={data}
                            ></AllReviewCard>
                        )) :
                        sliceReview.map(data => (
                            <AllReviewCard
                                key={data._id}
                                data={data}
                            ></AllReviewCard>
                        ))
                }
            </div>
            {!showAll && (
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        onClick={handleShowAllClick}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllReview;
