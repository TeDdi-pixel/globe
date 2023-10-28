import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import spinner from '../assets/img/Interwind-1s-200px.svg';

const LandingPage = lazy(() => import('../pages/LandingPage/LandingPage'));
const FlightsPage = lazy(() => import('../pages/FlightsPage/FlightsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const PersonalAccountPage = lazy(() => import('../pages/PersonalAccountPage/PersonalAccountPage'));

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
                <Route key={index} path={route.path} element={
                    <Suspense fallback={
                        <img src={spinner}
                            alt="spinner"
                            style={{
                                width: "150px",
                                height: "auto",
                                margin: '0 auto',
                                transform: 'translateY(35vh)'
                            }} />}
                    >{route.element}
                    </Suspense>} />
            )}
        </Routes>
    );
}

export default AppRouter;