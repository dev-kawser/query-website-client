import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import { toast } from "react-toastify";
import Comments from "./Comments";



const QueryDetails = () => {

    const singleQuery = useLoaderData();
    const { user } = useContext(AuthContext)

    const [comments, setComments] = useState([])


    const { productName, brandName, queryTitle, productPhoto, boycottDetails, date, userInfo, _id } = singleQuery;

    const handleRecommendation = e => {
        e.preventDefault();
        const form = e.target;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendationTitle = form.recommendationTitle.value;
        const recommendationProductImage = form.recommendationProductImage.value;
        const recommendationReason = form.recommendationReason.value;
        const queryTitleForRecommend = queryTitle;
        const queryId = _id;
        const productNameForRecommend = productName;
        const userName = userInfo.userName;
        const userEmail = userInfo.userEmail;
        const date = new Date().toISOString().split('T')[0];
        const recommenderName = user.displayName;
        const recommenderEmail = user.email;
        const recommendationCount = userInfo.recommendationCount;

        const recommendationInfo = {
            recommendedProductName: recommendedProductName,
            recommendationTitle: recommendationTitle,
            recommendationProductImage: recommendationProductImage,
            recommendationReason: recommendationReason,
            queryTitleForRecommend: queryTitleForRecommend,
            productNameForRecommend: productNameForRecommend,
            queryId: queryId,
            userName: userName,
            userEmail: userEmail,
            date: date,
            recommenderName: recommenderName,
            recommenderEmail: recommenderEmail,
            recommendationCount: recommendationCount,
        }

        console.log(recommendationInfo);

        fetch('http://localhost:5000/add-recommendation', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recommendationInfo)
        })
            .then(res => res.json())
            .then(() => {
                form.reset()
                toast.success("Recommend Added Successfully")
            })


    }

    useEffect(() => {
        fetch('http://localhost:5000/all-recommendation')
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])

    const particularComments = comments.filter(com => com.queryId === _id)


    return (
        <div>
            <div className="card container mx-auto lg:card-side border border-x-teal-100  shadow-xl my-10">
                <div className="lg:size-96 size-72 mx-auto lg:m-5 p-10 shadow-xl">
                    <figure><img src={productPhoto} alt="Album" /></figure>
                </div>
                <div className="divider py-5 lg:divider-horizontal">S</div>
                <div className="card-body w-full lg:w-2/3 space-y-3">
                    <div className="flex gap-1 lg:flex-row flex-col lg:gap-10">
                        <h2><span className="text-lg font-medium text-red-900">Product Name: </span><span className="text-blue-400 font-bold overpass">{productName}</span></h2>
                        <h2><span className="text-lg font-medium text-red-900">Brand Name: </span><span className="text-blue-400 font-bold overpass">{brandName}</span></h2>
                    </div>

                    <div>
                        <div className="flex gap-1 mt-1 lg:gap-3 lg:flex-row flex-col">
                            <p><span className="text-lg font-medium text-red-900">Posted Date: </span><span className="text-blue-400 overpass">{date}</span></p>
                            <p><span className="text-lg font-medium text-red-900">Recommendation: </span><span className="text-blue-400 overpass">{userInfo.recommendationCount
                            }</span></p>
                        </div>
                    </div>
                    <p><span className="text-lg font-medium overpass text-red-900">Alternation Reason:</span> <span className="text-blue-400 workSans">{boycottDetails}</span></p>
                    <h2 className="card-title text-red-900">Query Title: <span className="text-blue-400 overpass">{queryTitle}</span></h2>




                    <div>
                        <div className="lg:max-w-md p-8 border border-blue-400 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                <img src={userInfo.userPhoto} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{userInfo.userName}</h2>
                                    <span className="text-sm dark:text-gray-600">General manager</span>
                                </div>
                                <div className="space-y-1">
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                            <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                        </svg>
                                        <span className="dark:text-gray-600 text-sm">{userInfo.userEmail}</span>
                                    </span>
                                    <span className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                            <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                                        </svg>
                                        <span className="dark:text-gray-600">01709190412</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleRecommendation} className="border border-green-400 py-10">

                        <h1 className="text-3xl font-bold text-center">Add Recommendation</h1>

                        <div className="md:flex gap-10 px-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Recommended product Name</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="recommendedProductName"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Recommended Title</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="recommendationTitle"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-10 px-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Recommended Product Image</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="recommendationProductImage"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold">Recommendation reason</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="recommendationReason"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-center items-center">
                            <button type="submit" className="btn hover:scale-105 transition-all btn-secondary font-semibold">Add Recommendation</button>
                        </div>

                    </form>

                    <div>
                        <h2 className="text-center my-5 font-bold text-3xl">Recommends is here</h2>
                        {
                            particularComments.map(pc => <Comments pc={pc} key={pc._id} ></Comments>)
                        }
                    </div>



                </div>
            </div>
        </div>
    );
};

export default QueryDetails;