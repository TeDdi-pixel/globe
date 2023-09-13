import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import FlightsPage from "../pages/FlightsPage/FlightsPage";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/flights' element={<FlightsPage />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;