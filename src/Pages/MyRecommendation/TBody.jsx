/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const TBody = ({ mr, setMyRecommendation, MyRecommendation }) => {

    const { _id } = mr;


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
                fetch(`http://localhost:5000/myRecommendation/${id}`, {
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
                            const remaining = MyRecommendation.filter(mr => mr._id !== _id);
                            setMyRecommendation(remaining);
                        }
                    })
            }
        })
    }

    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300">
                <td className="p-3">
                    <p>{mr?.productNameForRecommend}</p>
                </td>
                <td className="p-3">
                    <p>{mr?.recommendedProductName}</p>
                </td>
                <td className="p-3">
                    <p>{mr?.recommendationTitle}</p>
                </td>
                <td className="p-3">
                    <p>{mr?.date}</p>
                </td>
                <td className="p-3">
                    <p>{mr?.recommenderEmail}</p>
                </td>
                <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-red-700 dark:text-gray-50">
                        <span>
                            <button onClick={() => handleDelete(_id)}>Delete</button>
                        </span>
                    </span>
                </td>
            </tr>
        </tbody>
    );
};

export default TBody;