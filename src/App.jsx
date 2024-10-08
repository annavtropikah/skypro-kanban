import "./App.css"
import { Route, Routes} from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";

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
    
   
    return (
        <>
            <GlobalStyle />

            <Routes>


                <Route element={<PrivateRoute />}>
                    <Route path={appRoutes.MAIN} element={<MainPage />}>
                        <Route path={appRoutes.TASK} element={<TaskPage />} />
                        <Route path={appRoutes.EXIT} element={<ExitPage />} />
                        <Route path={appRoutes.NEW_CARD} element={<NewCardPage />} />

                    </Route>
                </Route>


                <Route path={appRoutes.SIGNIN} element={<SignInPage />} />
                <Route path={appRoutes.SIGNUP} element={<SignUpPage  />} />
                <Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />


            </Routes>
        </>
    )
}