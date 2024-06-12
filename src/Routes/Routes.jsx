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
import AddItems from "../Pages/AddItems/AddItems";
import Checkout from "../Pages/Dashboard/Checkout/Checkout";
import Invoice from "../Pages/Dashboard/Checkout/Invoice";
import PaymentHistory from "../Pages/Dashboard/PaymentHistoy/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import PaymentManagement from "../Pages/Dashboard/PaymentManagement/PaymentManagement";
import SalesReport from "../Pages/Dashboard/SalesReport/SalesReport";
import SellerHome from "../Pages/Dashboard/SellerHome/SellerHome";
import SellerRoute from "./SellerRoute";
import ManageMedicine from "../Pages/Dashboard/ManageMedicine/ManageMedicine";
import AskAdvertiseMent from "../Pages/Dashboard/AskAdvertiseMent/AskAdvertiseMent";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ManageAdvertise from "../Pages/Dashboard/ManageAdvertise/ManageAdvertise";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "invoice",
                element: <Invoice></Invoice>
            },
            {
                path: "/shop",
                element: <PrivateRoute><Shop></Shop></PrivateRoute>
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
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
                loader: ({ params }) => fetch(`https://medinest-server.vercel.app/medicines/${params.id}`)
            },
            {
                path: "addItems",
                element: <AddItems></AddItems>
            },
            {
                path: "adminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "paymentManagement",
                element: <AdminRoute><PaymentManagement></PaymentManagement></AdminRoute>
            },
            {
                path: "salesReport",
                element: <AdminRoute><SalesReport></SalesReport></AdminRoute>
            },
            {
                path: "manageAdvertise",
                element: <AdminRoute><ManageAdvertise></ManageAdvertise></AdminRoute>
            },
            // seller routes only
            {
                path: "sellerHome",
                element: <SellerRoute><SellerHome></SellerHome></SellerRoute>
            },
            {
                path: "manageMedicine",
                element: <SellerRoute><ManageMedicine></ManageMedicine></SellerRoute>
            },
            {
                path: "advertisement",
                element: <SellerRoute><AskAdvertiseMent></AskAdvertiseMent></SellerRoute>
            }
        ]
    }
]);