import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftSide from '../../shared/headerLogged/LeftSide';
import BurgerMenu from '../../shared/headerLogged/BurgerMenu';

const HeaderLogged = ({ active, handleBurgerClick, onLogOut, userEmail }) => {
    const [isFullWidth, setIsFullWidth] = useState(false);
    console.log(userEmail);
    const logOut = () => {
        onLogOut();
        localStorage.clear();
    };

    const handleResize = () => {
        setIsFullWidth(window.innerWidth <= 648);
    };
    useEffect(() => {

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    return (
        <header className={active && isFullWidth ? 'header header_active' : 'header'}>
            <nav className='header__container'>
                <div className="header-background">
                    <img src="./assets/img/Rectangle 31.jpg" alt="" />
                </div>
                <nav className="header__nav">
                    <LeftSide />
                    <Link to='/' className="header-logo__wrapper header-logo__wrapper_logged">
                        <svg xmlns="http://www.w3.org/2000/svg" width="111" height="36" viewBox="0 0 111 36" fill="none">
                            <path d="M14.7282 5.57669L17.9466 8.00813L15.9805 10.5097C17.3379 12.0457 17.8382 13.7983 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1352C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1352H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1352C13.4026 25.7038 11.1146 24.5948 8.93505 24.5948C3.4319 24.5948 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79082 8.93823 6.79082C10.3339 6.79082 11.7615 6.96927 12.9788 7.79144L14.7282 5.57669ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" fill="white" />
                            <path d="M50.5673 0V24.99H46.2432V0H50.5673Z" fill="white" />
                            <path d="M69.9987 16.1948C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1948C51.6602 11.1534 55.1622 7.00754 60.7768 7.00754C66.3915 7.00754 69.9987 11.1534 69.9987 16.1948ZM56.0193 16.1948C56.0193 18.8748 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1948C65.5981 13.5498 63.7403 10.975 60.8087 10.975C57.6636 10.975 56.0193 13.5498 56.0193 16.1948Z" fill="white" />
                            <path d="M75.4507 0V9.76082C76.4864 7.93804 79.3829 6.93742 81.2407 6.93742C86.3869 6.93742 90.214 10.0827 90.214 16.1597C90.214 21.9499 86.3168 25.382 81.1355 25.382C78.991 25.382 76.8114 24.6681 75.4507 22.5586L75.164 24.99H71.0884V0H75.4507ZM75.7343 16.1597C75.7343 19.34 78.0924 21.3444 80.8456 21.3444C83.6338 21.3444 85.8516 19.2348 85.8516 16.1597C85.8516 12.9794 83.6338 11.0132 80.8456 11.0132C78.0956 11.01 75.7343 13.0845 75.7343 16.1597Z" fill="white" />
                            <path d="M96.6987 19.2317C97.712 21.1819 100.032 22.0136 102.922 20.962C104.432 20.4107 106.207 19.1201 106.794 17.804L110.356 19.4356C109.27 21.8862 106.733 23.7982 104.213 24.7159C98.5023 26.7937 93.8244 24.5024 91.8934 19.1934C90.058 14.1553 92.1643 9.27963 97.5399 7.32301C103.081 5.30584 107.791 7.47278 109.633 14.5249L96.6987 19.2317ZM104.467 12.5619C103.416 10.5097 101.345 10.0476 98.993 10.9017C96.7752 11.7079 95.354 13.4446 95.5324 15.8123L104.467 12.5619Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M39.7626 11.9898C38.3489 9.04026 35.4017 7.00754 31.4702 7.00754C25.8555 7.00754 22.3535 11.1534 22.3535 16.1948C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7108 26.4258 23.7108C27.6566 22.9077 28.8573 22.0624 30.0258 21.1765C27.8244 20.5287 26.7127 18.4223 26.7127 16.1948C26.7127 13.5498 28.3601 10.975 31.5021 10.975C34.269 10.975 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3736C34.5418 22.9057 37.7611 20.0866 40.6652 16.9631C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3736Z" fill="#8DD3BB" />
                            <path d="M43.3179 4.53785C38.8631 2.89989 35.6607 6.42437 35.6607 6.42437L38.6974 8.18979C39.835 7.53652 40.3417 8.17067 40.4723 8.51802C40.5648 8.76339 40.4405 9.03108 40.3417 9.17766L39.6024 10.1114C35.6129 14.9233 30.9223 19.1042 25.6868 22.5203C25.6868 22.5203 24.1063 23.795 23.265 23.8141C22.5576 23.8301 22.2422 23.2341 22.838 22.3801L21.3722 19.0723C21.3722 19.0723 17.558 21.5707 18.2972 25.9619C18.6095 27.8166 20.3525 29.1359 22.2039 28.8013C23.1503 28.6324 24.3198 28.1703 25.7505 27.2239L28.3826 25.5031C33.6181 22.0806 38.3119 17.8869 42.2982 13.0686L43.2032 11.9756C44.567 10.4237 45.1789 9.1458 45.386 8.13562C45.7046 6.59007 44.7901 5.07959 43.3179 4.53785Z" fill="#8DD3BB" />
                        </svg>
                    </Link>
                    <div className="header-right-side header-right-side_logged">
                        <Link to='/personal_account'><span className='header-right-side-logOut__text'>{userEmail}</span></Link>
                        <button onClick={logOut} className='header-right-side__logOut'>LogOut</button>

                    </div>
                    <div className={(active ? 'header-burger header-burger_logged header-burger_logged header-burger_active' : 'header-burger header-burger_logged')}
                        onClick={handleBurgerClick}
                    >
                        <span></span>
                    </div>
                </nav>
                <BurgerMenu active={active} onClick={logOut} userEmail={userEmail} />
                <div className="header__title-wrapper">
                    <h2>Helping Others</h2>
                    <h1>Live & Travel</h1>
                    <h3>Special offers to suit your plan</h3>
                </div>
            </nav>
        </header>
    )
}

export default HeaderLogged;
