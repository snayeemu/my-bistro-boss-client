import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/uesAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    console.log(loading, isAdminLoading);
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) return children;
  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
