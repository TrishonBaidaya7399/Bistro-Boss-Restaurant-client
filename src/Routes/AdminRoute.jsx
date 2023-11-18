import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin , isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
      return (
        <div className="flex items-center justify-center h-[80vh]">
          <Hourglass
            visible={true}
            height="150"
            width="150"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#d5850cb2", "#D1A054B2"]}
          />
        </div>
      );
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;