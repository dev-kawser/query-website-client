import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";



const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)


    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const links =
        <>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-bold ' : 'font-semibold hover:scale-105'} to='/' > Home</NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-bold ' : 'font-semibold hover:scale-105'} to='/all-queries' > Queries</NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-bold ' : 'font-semibold hover:scale-105'} to='/my-queries' > My Queries </NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            {
                user ?
                    <>
                        <li className="group flex  cursor-pointer flex-col">
                            <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-bold ' : 'font-semibold hover:scale-105'} to='/recommendation-for-me' > Recommendations For Me
                            </NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex  cursor-pointer flex-col">
                            <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-bold ' : 'font-semibold hover:scale-105'} to='/my-recommendations' > My recommendations
                            </NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </>

                    : ""
            }
        </>

    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const items = ['Profile', 'Dashboard', 'Settings', 'Log Out'];

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close)
        }
    }, []);


    return (
        <div className="shadow-xl">
            <div className="navbar p-3 lg:p-7 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <img className="size-10 lg:flex hidden lg:size-12 lg:rounded-full" src="https://i.ibb.co/ykcZXtz/sara-kurfess-6lc-T2k-RPvn-I-unsplash.jpg" alt="" />
                        <Link to="/" className="lg:text-2xl text-base font-bold">Smart <span className="text-blue-400">Tech</span> Spot</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center overpass justify-between gap-7 font-medium text-lg">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end z-50 ">

                    <label className="cursor-pointer hidden lg:grid place-items-center mr-3">
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === "dark"}
                            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>











                    {
                        user ?

                            <div ref={dropDownRef} className="relative mx-2 w-fit text-black">
                                <button onClick={() => setOpen((prev) => !prev)}>
                                    <img width={40} height={40} className="size-12 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80" src={user?.photoURL} alt="avatar drop down navigate ui" />
                                </button>
                                <ul className={`${open ? 'visible duration-300' : 'invisible'} absolute right-0 top-12 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}>
                                    {items.map((item, idx) => (
                                        <li key={idx}
                                            className={`rounded-sm px-6 py-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'}  ${item === 'Log Out' ? 'text-red-500 hover:bg-red-600 hover:text-white' : 'hover:bg-slate-300'}`}
                                            onClick={item === 'Log Out' ? LogOut : null}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            :

                            <Link to="/login">

                                <button className="group relative rounded z-10 h-12 w-24 overflow-hidden bg-black text-xl font-semibold text-white"><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Click</span>Login</button>

                            </Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;