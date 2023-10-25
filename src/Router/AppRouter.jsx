import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import FlightsPage from "../pages/FlightsPage/FlightsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import PersonalAccountPage from "../pages/PersonalAccountPage/PersonalAccountPage";

const routes = [
    { path: '/', element: <LandingPage /> },
    { path: '/signup', element: <SignUpPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/flights', element: <FlightsPage /> },
    { path: '/personal_account', element: <PersonalAccountPage /> },
]

function AppRouter() {
    return (
            <Routes>
                {routes.map((route, index) => 
                    <Route key={index} path={route.path} element={route.element}/>
                )}
            </Routes>
    );
}

export default AppRouter;