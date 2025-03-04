import { useContext } from "react";
import { AppContext } from "./contextAPI/AppContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AppContext);
  
  return isAuthenticated ? element : <Navigate to="/Auth" />
}

export default PrivateRoute;