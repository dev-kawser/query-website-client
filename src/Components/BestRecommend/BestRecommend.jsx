

const BestRecommend = () => {
    return (
        <div className="my-20 container mx-auto px-2">

            <h2 className="text-5xl font-bold text-center">Top Recommend Phones</h2>

            <div className="mt-10 gap-10 grid lg:grid-cols-3 grid-cols-1">
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md">
                    {/* Card Image */}
                    <img width={350} height={190} className=" w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/TrtXVnj/i-Phone-13-Pro-Max.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">iPhone 13 Pro Max</h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$1099</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md ">
                    {/* Card Image */}
                    <img width={350} height={190} className=" w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/rHXsWG3/Samsung-Galaxy-S21-Ultra.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">Samsung Galaxy S21 Ultra</h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$1199</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md ">
                    {/* Card Image */}
                    <img width={350} height={190} className="w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/JBR1hdn/Google-Pixel-6-Pro.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">Google Pixel 6 Pro</h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$899</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md ">
                    {/* Card Image */}
                    <img width={350} height={190} className=" w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/Bcy7NGX/One-Plus-9-Pro.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">OnePlus 9 Pro</h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$969</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md ">
                    {/* Card Image */}
                    <img width={350} height={190} className=" w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/cNWfGTx/pok.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">Xiaomi Mi 11 Ultra</h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$1199</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className=" w-full space-y-6 rounded-2xl border border-blue-500 px-6 py-4 shadow-md ">
                    {/* Card Image */}
                    <img width={350} height={190} className="w-full rounded-2xl bg-gray-400" src={'https://i.ibb.co/3NZbyw7/Samsung-Galaxy-Z-Fold-3.jpg'} alt="card navigate ui" />
                    {/* Card Heading */}
                    <div className="space-y-2">
                        <h2 className="font-medium  sm:text-lg md:text-xl">Samsung Galaxy Z Fold 3 </h2>
                        {/* rating  */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((data, index) => (
                                <svg className="fill-yellow-400" key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            ))}
                        </div>
                    </div>
                    {/* Price and action button */}
                    <div className="mt-5 flex items-center justify-between">
                        <h2 className="font-medium md:text-xl ">$1799</h2>
                        <button className="rounded-lg text-white bg-slate-800 px-3 py-2 text-[12px] font-semibold  hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <button className="btn text-white btn-info">See More</button>
            </div>
        </div>
    );
};

export default BestRecommend;