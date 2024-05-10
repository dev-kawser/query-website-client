import { useContext } from "react";
import { AuthContext } from "../../Context/ContextProvider";


const AddQueries = () => {

    const { user } = useContext(AuthContext)

    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;
    const userInfo = {
        userName: userName,
        userEmail: userEmail,
        userPhoto: userPhoto,
        recommendationCount: 0
    }

    const handleAddQuery = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const queryTitle = form.queryTitle.value;
        const productPhoto = form.photoUrl.value;
        const boycottDetails = form.boycottDetails.value;
        const date = new Date().toISOString().split('T')[0];

        const addQueryInfo = {
            productName: productName,
            brandName: brandName,
            queryTitle: queryTitle,
            productPhoto: productPhoto,
            boycottDetails: boycottDetails,
            date: date,
            userInfo: userInfo
        }

        
    }


    return (
        <div>

            <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transhtmlForm-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add Query</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Have a Question? Share it Here and Lets Find the Solution Together</p>
                </div>
                <form onSubmit={handleAddQuery} action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-black">Product Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="productName" id="first-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-black">Brand Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="brandName" id="last-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-black">Product Image-URL
                            </label>
                            <div className="mt-2.5">
                                <input type="url" name="photoUrl" id="company" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="title" className="block text-sm font-semibold leading-6 text-red-600">Query TItle</label>
                            <div className="mt-2.5">
                                <input type="text" name="queryTitle" id="title" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-green-600">Boycotting Reason Details</label>
                            <div className="mt-2.5">
                                <textarea name="boycottDetails" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Query</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQueries;