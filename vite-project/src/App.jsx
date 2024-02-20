import "./App.css"
import { Route, Routes, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ExitPage from "./pages/ExitPage/ExitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NewCardPage from "./pages/NewCardPage/NewCardPage";
import { GlobalStyle } from "./common/Global.styled";





export default function App() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    function login(newUser) {
        setUser(newUser)
        navigate(appRoutes.MAIN)
    }
    function logout() {
        setUser(null)
        navigate(appRoutes.SIGNIN)
    }
    return (
        <>
            <GlobalStyle />

            <Routes>


                <Route element={<PrivateRoute user={user} />}>
                    <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
                        <Route path={appRoutes.TASK} element={<TaskPage />} />
                        <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
                        <Route path={appRoutes.NEW_CARD} element={<NewCardPage />} />

                    </Route>
                </Route>


                <Route path={appRoutes.SIGNIN} element={<SignInPage login={login} />} />
                <Route path={appRoutes.SIGNUP} element={<SignUpPage />} />
                <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />


            </Routes>
        </>
    )
}