/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyQueriesCard = ({ data, myQueries, setMyQueries }) => {


    const { _id, productName, brandName, queryTitle, productPhoto, boycottDetails, date, } = data;

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myQueries/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Query has been deleted.",
                                icon: "success"
                            });
                            const remaining = myQueries.filter(mq => mq._id !== _id);
                            setMyQueries(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-100 dark:text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p className="mb-0 font-semibold capitalize dark:text-gray-800">{productName}</p>
                </div>
                <p className="font-semibold">{brandName}</p>
            </div>
            <div className="space-y-7">
                <div className="space-y-2">
                    <img src={productPhoto} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 border border-blue-400" />
                    <div className="flex items-center text-xs">
                        <span>{date}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{queryTitle}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{boycottDetails}</p>
                </div>
                <div className="flex justify-between items-center">
                    {/* <Link to={`/updateArt/${_id}`}>
                            <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 lg:flex hidden hover:scale-105 transition-all">Update</button>
                        </Link> */}
                    <Link to={`/query/${_id}`}>
                        <button>Details</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} type="button" className="px-8 py-3 font-semibold rounded dark:bg-red-600 dark:text-gray-100 hover:scale-105 transition-all">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyQueriesCard;