import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
import useSeller from "../../../Hooks/useSeller";


const Navbar = () => {
    const { user, logout } = useAuth();
    const [isAdmin] = useAdmin();
    const [dark, setDark] = useState(true);
    const [cart] = useCart();
    const [isSeller] = useSeller();

    // Function to toggle the theme
    const toggleTheme = () => {
        setDark(prevTheme => !prevTheme);
        if (dark) {
            document.querySelector('html').setAttribute('data-theme', 'dim');
        }
        else {
            document.querySelector('html').setAttribute('data-theme', 'light');
        }
    };

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start z-50">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <div className="text-2xl">
                                <Link to="/cart">
                                    <button className="btn">
                                        <FaShoppingCart size={18} />
                                        <div className="badge badge-accent ml-[-6px] text-white">{cart.length}</div>
                                    </button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <Link to="/" className="ml-[-50px]">
                        <img className="lg:w-40 w-32 lg:h-20 h-16" src="https://i.ibb.co/NndfkCd/logomoos-removebg.png" alt="" /></Link>
                </div>
                <div className="navbar-end lg:gap-3 z-50">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                            <li>
                                <details>
                                    <summary>Languages</summary>
                                    <ul className="p-2">
                                        <li><a>English</a></li>
                                        <li><a>Spanish</a></li>
                                    </ul>
                                </details>
                            </li>
                            <div className="flex justify-center items-center text-2xl">
                                <Link to="/cart">
                                    <button className="btn">
                                        <FaShoppingCart size={20} />
                                        <div className="badge badge-accent ml-[-8px] text-white">{cart.length}</div>
                                    </button>
                                </Link>
                            </div>
                        </ul>
                    </div>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/LnFWKKk/download-8.jpg"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="btn btn-sm  btn-ghost w-full mx-1">
                                    <Link to="/updateProfile">
                                        Update Profile
                                    </Link>
                                </li>
                                <li>
                                    {user && isAdmin && (
                                        <li className="btn btn-sm  btn-ghost w-full mx-1">
                                            <Link to="/dashboard/adminHome">Dashboard</Link>
                                        </li>
                                    )}
                                    {user && isSeller && (
                                        <li className="btn btn-sm  btn-ghost w-full mx-1">
                                            <Link to="/dashboard/sellerHome">Dashboard</Link>
                                        </li>
                                    )}
                                    {user && !isAdmin && !isSeller && (
                                        <li className="btn btn-sm  btn-ghost w-full mx-1">
                                            <Link to="/dashboard/paymentHistory">Dashboard</Link>
                                        </li>
                                    )}
                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-[#008080] text-white">Join Us</button>
                            </Link>
                    }
                    <div className="pr-1">
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" onClick={() => toggleTheme(setDark(dark))} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;