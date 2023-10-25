import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import FlightsPage from "../pages/FlightsPage/FlightsPage";
import PersonalAccount from "../pages/PersonalAccountPage/PersonalAccount";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

function AppRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />}></Route>
                <Route path='/signup' element={<SignUpPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/flights' element={<FlightsPage />}></Route>
                <Route path='/personal_account' element={<PersonalAccount />}></Route>
            </Routes>
        </>
    );
}

export default AppRouter;