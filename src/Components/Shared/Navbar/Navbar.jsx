import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const links =
        <>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-semibold ' : 'font-semibold hover:scale-105'} to='/' > Home</NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-semibold ' : 'font-semibold hover:scale-105'} to='/queries' > Queries</NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <NavLink className={({ isActive }) => isActive ? 'text-sky-500 font-semibold ' : 'font-semibold hover:scale-105'} to='/my-queries ' > My Queries </NavLink> <span className="hidden lg:block mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </>


    return (
        <div className="navbar bg-base-100 mt-5 container mx-auto">
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
                    <img className="size-10 lg:size-12" src="https://i.ibb.co/XYyrSVm/logo.png" alt="" />
                    <Link to="/" className="text-xl font-bold">Smart Tech Spot</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center justify-between gap-7 font-medium text-lg">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">

                <Link to="/login">

                    <button className="group relative rounded z-10 h-12 w-28 overflow-hidden bg-black text-xl font-semibold text-white"><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Click</span>Login</button>

                </Link>
                <Link to="/register">

                    <button className="group relative rounded z-10 h-12 w-28 overflow-hidden bg-black text-xl text-white"><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span><span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span><span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">Click</span>Register</button>

                </Link>

            </div>
        </div>
    );
};

export default Navbar;