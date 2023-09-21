import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import LandingPageMain from '../../components/LandingPageMain/LandingPageMain';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const FlightsPage = () => {
    const [active, setActive] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!Cookies.get('user'));
    
    const userCookie = Cookies.get('user');
    const emailData = userCookie && JSON.parse(userCookie).email;
    const emailParts = emailData && emailData.split('@');
    const emailName = emailParts && emailParts[0];
    console.log(emailName);
    // console.log(JSON.parse(user));
    const navigate = useNavigate();
    useEffect(() => {
        if (isUserLoggedIn) {
            console.log('user is successfully authorized');
            
            
        } else {
            console.log('user is not authorized');
            navigate('/');
        }
    }, [isUserLoggedIn, navigate]);
    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };
    const handleLogOut = () => {
        Cookies.remove('user');
        setIsUserLoggedIn(prev => !prev);
      };
    return (
        <div>
            <HeaderLogged onLogOut={handleLogOut} active={active} handleBurgerClick={handleBurgerClick} userEmail={emailName}/>
            <LandingPageMain />
            <Footer />
        </div>
    );
}

export default FlightsPage;
