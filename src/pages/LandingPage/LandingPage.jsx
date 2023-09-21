import { useEffect, useState } from "react";
import HeaderUnlogged from "../../components/HeaderUnlogged/HeaderUnlogged";
import LandingPageMain from "../../components/LandingPageMain/LandingPageMain";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogged from "../../components/HeaderLogged/HeaderLogged";
import Cookies from "js-cookie";

function LandingPage() {
    const [active, setActive] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!Cookies.get('user'));
    const navigate = useNavigate();
    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };
    useEffect(() => {
        if (isUserLoggedIn) {
            console.log('user is successfully authorized');
            navigate('/flights'); 
        } else {
            console.log('user is not authorized');
        }
    }, [isUserLoggedIn, navigate]);
    
    const handleLogOut = () => {
        setIsUserLoggedIn(prev => !prev);
      };



    return (
        <>
            {/* <div className="container"> */}
                {
                    isUserLoggedIn ? (<HeaderLogged onLogOut={handleLogOut} active={active} handleBurgerClick={handleBurgerClick}/>)
                    :
                    (<HeaderUnlogged active={active} handleBurgerClick={handleBurgerClick}/>)   
                }

            {/* </div> */}
            <LandingPageMain active={active} />

            <Footer />
        </>
    );
}

export default LandingPage;