import { Navigate, useLocation } from "react-router-dom";
import useSeller from "../Hooks/useSeller";
import useAuth from "../Hooks/useAuth";


const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isSeller, isSellerLoading] = useSeller();
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default SellerRoute;