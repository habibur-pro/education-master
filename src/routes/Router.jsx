import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home/Home"
import Main from "../layout/Main"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Colleges from "../pages/Colleges/Colleges"
import Admission from "../pages/Admission/Admission"
import MyColleges from "../pages/MyColleges/MyColleges"
import CollegeDetails from "../pages/collegeDetails/CollegeDetails"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/colleges',
                element: <Colleges />
            },
            {
                path: '/colleges/:id',
                element: <CollegeDetails />
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/my_colleges',
                element: <MyColleges />
            },

        ]
    }
])
export default router