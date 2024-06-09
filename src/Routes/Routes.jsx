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
                element: <Cart></Cart>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            
        ]
    }
]);