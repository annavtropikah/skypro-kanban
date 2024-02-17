import { Navigate, Outlet } from "react-router-dom";
import { appRouts } from "../../lib/appRouts";

export default function PrivateRoute({user}){
return user ? <Outlet/> : <Navigate to={appRouts.SIGNIN}/>
}