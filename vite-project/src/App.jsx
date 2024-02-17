import "./App.css"
import { Route, Routes } from "react-router-dom";
import { appRouts } from "./lib/appRouts";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ExitPage from "./pages/ExitPage/ExitPage";
import SignInPage from "./pages/SignUpPage/SignUpPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import MainPage from "./pages/MainPage/MainPage";




export default function App() {
    const [user, setUser] = useState(false)
    function login(){
        setUser(true)
    }
    function logout(){
        setUser(false)
    }
    return (

        <Routes>
            <Route element={<PrivateRoute user={user}/>}>
                <Route path={appRouts.MAIN} element={<MainPage/>}/>
                <Route path={appRouts.TASK} element={<TaskPage/>}/>
                <Route login={login} logout={logout} path={appRouts.EXIT} element={<ExitPage/>}/>
            </Route>

                <Route path={appRouts.SIGNIN} element={<SignInPage />} />
                <Route path={appRouts.SIGNUP} element={<SignUpPage />} />
                <Route path={appRouts.NOT_FOUND} element={<NotFound />} />


        </Routes>
    )
}