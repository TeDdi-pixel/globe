import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import FlightsPage from "../pages/FlightsPage/FlightsPage";
import PersonalAccount from "../pages/PersonalAccountPage/PersonalAccount";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/flights' element={<FlightsPage />}></Route>
                <Route path='/personal_account' element={<PersonalAccount />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;