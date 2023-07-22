import { NavLink } from "react-router-dom";
import MyContainer from "../MyContainer/MyContainer";
import { useEffect, useState } from "react";


const Navbar = () => {

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




    return (
        <nav className={`fixed w-full z-50 text-white ${scrolled ? "bg-white" : ""}`}>
            <MyContainer>
                <div className="flex justify-between items-center my-4">
                    <div>
                        <h3 className="text-3xl font-bold">Education Master</h3>
                    </div>
                    <ul className="flex gap-5">
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
                                to="/college"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                College
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
                        <li>
                            <NavLink
                                to="/login"
                                className={` ${({ isActive }) => {
                                    isActive ? "text-red-500" : ""
                                }}`}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </MyContainer>
        </nav>
    );
};

export default Navbar;