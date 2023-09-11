import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;