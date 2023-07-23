import { Link, NavLink, useLocation } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const location = useLocation()
    const { user, logout } = useAuth()
    console.log(user)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled more than a certain amount (e.g., 100px)
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleLogOut = () => {
        logout()
            .then(() => {
                console.log('log out');
            })
    }



    return (
        <nav className={`fixed w-full  z-50   ${scrolled ? "bg-white border-b text-black" : "text-black bg-white"}`}>
            <MyContainer>
                <div className="flex justify-between items-center my-4">
                    <div className="flex items-center justify-between gap-x-10">
                        <h3 className="text-3xl font-bold">Education Master</h3>
                        <ul className="flex gap-5 items-center text-lg">
                            <li>
                                <NavLink
                                    to="/"
                                    className={` ${({ isActive }) => {
                                        isActive ? "text-red-500" : ""
                                    }}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/colleges"
                                    className={` ${({ isActive }) => {
                                        isActive ? "text-red-500" : ""
                                    }}`}
                                >
                                    Colleges
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/admission"
                                    className={` ${({ isActive }) => {
                                        isActive ? "text-red-500" : ""
                                    }}`}
                                >
                                    Admission
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/my_colleges"
                                    className={` ${({ isActive }) => {
                                        isActive ? "text-red-500" : ""
                                    }}`}
                                >
                                    My colleges
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <div >
                        <div className="flex items-center gap-5">
                            {/* <div className="rounded-full bg-white p-2 flex items-center ">

                                <span title="Search" className="text-2xl font-bold">  <CiSearch /></span>
                                <input className=" rounded-full" type="text" />

                                <button className="btn btn-primary rounded-full">Search</button>

                            </div> */}

                            <div className="relative mx-auto text-gray-600 lg:block hidden">
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                                    <span title="Search" className="text-xl font-bold">  <CiSearch /></span>
                                </button>
                            </div>






                            <div className="flex items-center gap-5">
                                {
                                    user ? <button onClick={handleLogOut}>logOUt</button>
                                        :
                                        <NavLink
                                            to="/login"
                                            className={` text-lg ${({ isActive }) => {
                                                isActive ? "text-red-500" : ""
                                            }}`}
                                        >
                                            Login
                                        </NavLink>
                                }
                                <Link to='register'>
                                    <button className="btn btn-primary  rounded-full btn-md px-7">SignUp</button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </MyContainer>
        </nav>
    );
};

export default Navbar;