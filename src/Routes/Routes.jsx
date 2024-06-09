import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CategoryWise from "../Pages/CategoryWise/CategoryWise";
import Cart from "../Pages/Cart/Cart";
import Shop from "../Pages/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageCategories from "../Pages/Dashboard/AllUsers/ManageCategories/ManageCategories";
import UpdateMedicine from "../Pages/UpdateMedicine/UpdateMedicine";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "categoryWise/:category",
                element: <CategoryWise></CategoryWise>
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: "/shop",
                element: <PrivateRoute><Shop></Shop></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // admin routes
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "manageItems",
                element: <AdminRoute><ManageCategories></ManageCategories></AdminRoute>
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute><UpdateMedicine></UpdateMedicine></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/medicine/${params.id}`)
            }
        ]
    }
]);