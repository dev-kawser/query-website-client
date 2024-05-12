/* eslint-disable react/prop-types */
const Comments = ({ pc }) => {

    const { recommendedProductName, date, recommendationTitle, recommendationProductImage, recommendationReason } = pc


    return (
        <section className="relative flex flex-col justify-center bg-slate-50 overflow-hidden antialiased">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-5">


                    <div className="w-full max-w-3xl mx-auto">

                        <div className="space-y-2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                            <div className="relative">
                                <div className="md:flex items-center md:space-x-4 mb-3">
                                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                            <img src={recommendationProductImage} alt="" />
                                        </div>
                                        <time className="text-sm font-medium text-indigo-500 md:w-28">{date}</time>
                                    </div>
                                    <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{recommendedProductName}</span> {recommendationTitle}</div>
                                </div>
                                <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">{recommendationReason}</div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Comments;
