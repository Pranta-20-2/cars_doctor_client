import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
    // console.log(location.pathname);
    if (loading) {
        return <div className=" text-center">
            <progress className="progress mx-auto w-56"> </progress>
            <p>Loading.........</p>
        </div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;