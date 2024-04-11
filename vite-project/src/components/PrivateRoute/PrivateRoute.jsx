import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from "../../lib/appRoutes";

export default function PrivateRoute() {
    const {user}=useUser()
    return user ? <Outlet /> : <Navigate to={appRoutes .SIGNIN} />
}