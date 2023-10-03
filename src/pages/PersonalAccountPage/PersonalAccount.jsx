import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import HeaderDefault from '../../components/HeaderDefault/HeaderDefault';
import PersonalAccountMain from '../../components/PersonalAccountMain/PersonalAccountMain';

const PersonalAccount = () => {
  const [active, setActive] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!Cookies.get('user'));

  const userCookie = Cookies.get('user');
  const emailData = userCookie && JSON.parse(userCookie).email;
  const emailParts = emailData && emailData.split('@');
  const emailName = emailParts && emailParts[0];
  const [isFullWidth, setIsFullWidth] = useState(false);
  // console.log(emailName);
  // console.log(JSON.parse(user));
  const navigate = useNavigate();
  const handleResize = () => {
    setIsFullWidth(window.innerWidth <= 385);
};
  useEffect(() => {
    if (isUserLoggedIn) {
      // console.log('user is successfully authorized');
    } else {
      // console.log('user is not authorized');
      navigate('/');
    }
    window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
  }, [isUserLoggedIn, navigate]);
  const handleBurgerClick = () => {
    setActive((prev) => !prev);
  };
  const handleLogOut = () => {
    Cookies.remove('user');
    setIsUserLoggedIn(prev => !prev);
  };
  return (
    <>
      <HeaderDefault onLogOut={handleLogOut} active={active} handleBurgerClick={handleBurgerClick} userEmail={emailName} />
      <PersonalAccountMain active={active}/>
      <Footer style={isFullWidth? {marginTop : '834px'} : {marginTop : '593px'} }/>
    </>
  );
}

export default PersonalAccount;
