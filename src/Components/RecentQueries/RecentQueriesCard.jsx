/* eslint-disable react/prop-types */

const RecentQueriesCard = ({ data }) => {

    const { productName, userInfo, brandName, queryTitle, productPhoto, boycottDetails, date, } = data;


    return (
        <div className="max-w-lg p-4 shadow-md border border-blue-400 rounded-lg">
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
                    <img className="size-12 rounded-full" src={userInfo.userPhoto} alt="" />
                    <p className="font-semibold">{userInfo.userName}</p>
                </div>
            </div>
        </div>
    );
};

export default RecentQueriesCard;