import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderDefault = ({ active, handleBurgerClick, onLogOut, userEmail }) => {
    const [isFullWidth, setIsFullWidth] = useState(false);
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState('');
    const [userName, setUserName] = useState('');
    const handleResize = () => {
        setIsFullWidth(window.innerWidth <= 648);
    };

    useEffect(() => {
        if (!Cookies.get('user'))
            navigate('/flights');
        const storedImage = localStorage.getItem('userImage');
        if (storedImage) {
            setProfileImage(storedImage);
        }
        const userData = JSON.parse(Cookies.get('user'));
        console.log(userData);
        const username = userData.userName;
        if (username) {
            setUserName(username);
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    const styledColorFirst = active ? { fill: 'white', transition: 'fill ease 0.4s' } : { fill: '#112211', transition: 'fill ease 0.4s' };
    // const logOut = () => {
    //     onLogOut();
    //     localStorage.clear();
    // };
    return (
        <header className={active && isFullWidth ? 'header-default header-default_active' : 'header-default'}>
            <nav className='header-default__container'>
                <div className={active ? 'header-default__nav header-default__nav_active' : 'header-default__nav'}>
                    <div className="header-left-side header-default-left-side_logged">
                        <Link className="header-default-find-flights header-default-find-flights_logged">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z" fill="white" />
                                </svg>
                            </li>
                            <li>Find Flight</li>
                        </Link>
                        <Link className="header-default-find-stays header-default-find-stays_logged">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="white" />
                                </svg>
                            </li>
                            <li>Find Stays</li>
                        </Link>
                    </div>
                    <Link to='/' className="header-default-logo__wrapper header-default-logo__wrapper_logged">

                        <svg className={active && isFullWidth ? 'svg-logo svg-logo_active' : 'svg-logo'} xmlns="http://www.w3.org/2000/svg" width="111" height="37" viewBox="0 0 111 37" fill="none">
                            <path d="M14.7282 6.07669L17.9466 8.50813L15.9805 11.0097C17.3379 12.5457 17.8382 14.2983 17.8382 16.2295C17.8382 18.4092 17.0161 21.4843 14.1195 22.8068C17.0512 24.2727 17.7649 26.3823 17.7649 28.6352C17.7649 33.4981 14.0463 36.5 8.93505 36.5C3.82384 36.5 0 33.3898 0 28.6352H4.32413C4.32413 30.9233 6.43362 32.4242 8.93505 32.4242C11.4365 32.4242 13.4026 31.0667 13.4026 28.6352C13.4026 26.2038 11.1146 25.0948 8.93505 25.0948C3.4319 25.0948 0 21.7361 0 16.2295C0 10.7229 4.00229 7.29082 8.93823 7.29082C10.3339 7.29082 11.7615 7.46927 12.9788 8.29144L14.7282 6.07669ZM4.32413 16.2295C4.32413 19.3046 6.39857 21.1274 8.93505 21.1274C11.4365 21.1274 13.5109 19.2696 13.5109 16.2295C13.5109 13.1894 11.4397 11.2614 8.93823 11.2614C6.39856 11.2614 4.32413 13.1543 4.32413 16.2295Z" fill="#112211" />
                            <path d="M50.5663 0.5V25.49H46.2422V0.5H50.5663Z" fill="#112211" />
                            <path d="M69.9987 16.6948C69.9987 21.7711 66.5317 25.882 60.8119 25.882C55.0921 25.882 51.6602 21.7711 51.6602 16.6948C51.6602 11.6534 55.1622 7.50754 60.7768 7.50754C66.3915 7.50754 69.9987 11.6534 69.9987 16.6948ZM56.0193 16.6948C56.0193 19.3748 57.6285 21.8795 60.8087 21.8795C63.9889 21.8795 65.5981 19.3779 65.5981 16.6948C65.5981 14.0498 63.7403 11.475 60.8087 11.475C57.6636 11.475 56.0193 14.0498 56.0193 16.6948Z" fill="#112211" />
                            <path d="M75.4503 0.5V10.2608C76.4859 8.43804 79.3824 7.43742 81.2402 7.43742C86.3865 7.43742 90.2135 10.5827 90.2135 16.6597C90.2135 22.4499 86.3163 25.882 81.135 25.882C78.9905 25.882 76.8109 25.1681 75.4503 23.0586L75.1635 25.49H71.0879V0.5H75.4503ZM75.7339 16.6597C75.7339 19.84 78.0919 21.8444 80.8451 21.8444C83.6333 21.8444 85.8511 19.7348 85.8511 16.6597C85.8511 13.4794 83.6333 11.5132 80.8451 11.5132C78.0951 11.51 75.7339 13.5845 75.7339 16.6597Z" fill="#112211" />
                            <path d="M96.6992 19.7317C97.7125 21.6819 100.032 22.5136 102.922 21.462C104.433 20.9107 106.208 19.6201 106.794 18.304L110.357 19.9356C109.27 22.3862 106.734 24.2982 104.213 25.2159C98.5028 27.2937 93.8249 25.0024 91.8939 19.6934C90.0584 14.6553 92.1647 9.77963 97.5404 7.82301C103.082 5.80584 107.792 7.97278 109.633 15.0249L96.6992 19.7317ZM104.468 13.0619C103.416 11.0097 101.345 10.5476 98.9935 11.4017C96.7757 12.2079 95.3545 13.9446 95.5329 16.3123L104.468 13.0619Z" fill="#112211" />
                            <path fill-rule="evenodd" clipRule="evenodd" d="M39.7626 12.4898C38.3489 9.54026 35.4017 7.50754 31.4702 7.50754C25.8555 7.50754 22.3535 11.6534 22.3535 16.6948C22.3535 19.9132 23.733 22.7436 26.2006 24.3843C26.3412 24.2791 26.4258 24.2108 26.4258 24.2108C27.6566 23.4077 28.8573 22.5624 30.0258 21.6765C27.8244 21.0287 26.7127 18.9223 26.7127 16.6948C26.7127 14.0498 28.3601 11.475 31.5021 11.475C34.269 11.475 36.0793 13.7686 36.274 16.2501C37.4868 15.0464 38.6507 13.792 39.7626 12.4898ZM31.0601 25.8736C34.5418 23.4057 37.7611 20.5866 40.6652 17.463C40.3328 22.1795 36.9335 25.882 31.5052 25.882C31.3553 25.882 31.2069 25.8791 31.0601 25.8736Z" fill="#8DD3BB" />
                            <path d="M43.3169 5.03785C38.8622 3.39989 35.6597 6.92437 35.6597 6.92437L38.6965 8.68979C39.8341 8.03652 40.3407 8.67067 40.4714 9.01802C40.5638 9.26339 40.4395 9.53108 40.3407 9.67766L39.6014 10.6114C35.6119 15.4233 30.9213 19.6042 25.6858 23.0203C25.6858 23.0203 24.1053 24.295 23.2641 24.3141C22.5567 24.3301 22.2412 23.7341 22.8371 22.8801L21.3713 19.5723C21.3713 19.5723 17.557 22.0707 18.2963 26.4619C18.6085 28.3166 20.3516 29.6359 22.203 29.3013C23.1494 29.1324 24.3188 28.6703 25.7496 27.7239L28.3816 26.0031C33.6171 22.5806 38.3109 18.3869 42.2973 13.5686L43.2022 12.4756C44.5661 10.9237 45.1779 9.6458 45.385 8.63562C45.7037 7.09007 44.7891 5.57959 43.3169 5.03785Z" fill="#8DD3BB" />
                        </svg>


                    </Link>
                    <div className="header-default-right-side header-default-right-side_logged">
                        {/* <span className='header-default-right-side-logOut__text'>{userEmail}</span> */}
                        <div className='header-default__favorites'>
                            <Link className='header-default__favorites_left'>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M12.0005 21.5C11.6994 21.4996 11.4054 21.4086 11.1568 21.2389C7.47286 18.7381 5.87771 17.0234 4.99786 15.9514C3.12286 13.6663 2.22521 11.3202 2.25052 8.77953C2.28005 5.86813 4.61583 3.5 7.4574 3.5C9.52365 3.5 10.9547 4.66391 11.7882 5.63328C11.8146 5.66368 11.8472 5.68805 11.8838 5.70476C11.9205 5.72146 11.9603 5.73011 12.0005 5.73011C12.0408 5.73011 12.0806 5.72146 12.1172 5.70476C12.1538 5.68805 12.1865 5.66368 12.2129 5.63328C13.0463 4.66297 14.4774 3.5 16.5436 3.5C19.3852 3.5 21.721 5.86812 21.7505 8.78C21.7758 11.3211 20.8772 13.6672 19.0032 15.9519C18.1233 17.0239 16.5282 18.7386 12.8443 21.2394C12.5955 21.4089 12.3016 21.4998 12.0005 21.5Z" fill="#112211" />
                                    </svg>
                                    
                                </li>
                                <li>Favorites</li>
                                <span className='header-default__favorites_left__line-through'></span>
                            </Link>


                            <Link className='header-default__favorites_right'>
                                <li>
                                    {profileImage ?
                                        <img src={profileImage} alt="" />
                                        :
                                        <svg

                                            viewBox="0 0 24 24"
                                            fill="#121"
                                            height="100"
                                            width="100"
                                        >
                                            <path d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0112 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0112 8a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 11z" />
                                        </svg>}

                                </li>
                                <li>
                                    {userName}
                                </li>
                            </Link>

                        </div>
                        {/* <button onClick={logOut} className='header-default-right-side__logOut'>LogOut</button> */}

                    </div>
                    <div className={(active ? 'header-default-burger header-default-burger_logged header-default-burger_logged header-default-burger_active' : 'header-default-burger header-default-burger_logged')}
                        onClick={handleBurgerClick}
                    >
                        <span></span>
                    </div>

                </div>
                <div className={(active ? 'header-default-burger-menu  header-default-burger-menu_active' : 'header-default-burger-menu')}>
                    <Link className="header-find-flights">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.74733 21.75H7.49952C7.37414 21.75 7.25077 21.7185 7.14069 21.6585C7.03062 21.5984 6.93735 21.5118 6.86941 21.4064C6.80147 21.301 6.76104 21.1803 6.7518 21.0552C6.74257 20.9302 6.76483 20.8048 6.81655 20.6906L9.83811 14.0227L5.30108 13.9219L3.64639 15.9267C3.33092 16.3233 3.07921 16.5 2.43702 16.5H1.59702C1.46402 16.5043 1.33195 16.4764 1.212 16.4188C1.09205 16.3612 0.987757 16.2755 0.907956 16.1691C0.796393 16.0186 0.686706 15.7636 0.793581 15.3998L1.72264 12.0717C1.72967 12.0469 1.73811 12.022 1.74749 11.9977C1.74795 11.9953 1.74795 11.9929 1.74749 11.9906C1.73781 11.9663 1.72951 11.9414 1.72264 11.9161L0.792643 8.56687C0.691862 8.21016 0.802018 7.96078 0.912643 7.81406C0.986929 7.71549 1.08331 7.63573 1.19403 7.58118C1.30475 7.52664 1.42672 7.49883 1.55014 7.5H2.43702C2.91655 7.5 3.38202 7.71516 3.65577 8.0625L5.27624 10.0336L9.83811 9.96609L6.81749 3.30984C6.7657 3.19568 6.74335 3.07036 6.75249 2.94533C6.76163 2.8203 6.80196 2.69956 6.8698 2.59414C6.93764 2.48872 7.03082 2.40198 7.14083 2.34186C7.25083 2.28175 7.37416 2.25016 7.49952 2.25H8.76092C8.9369 2.25354 9.10983 2.29667 9.26685 2.3762C9.42388 2.45572 9.56097 2.5696 9.66796 2.70937L15.5297 9.83438L18.2376 9.76312C18.4359 9.75234 18.9853 9.74859 19.1123 9.74859C21.7026 9.75 23.2495 10.5909 23.2495 12C23.2495 12.4434 23.0723 13.2656 21.8869 13.7887C21.187 14.0981 20.2533 14.2547 19.1114 14.2547C18.9858 14.2547 18.4378 14.2509 18.2367 14.2402L15.5292 14.168L9.65296 21.293C9.54588 21.4321 9.40891 21.5454 9.25216 21.6246C9.0954 21.7037 8.92288 21.7465 8.74733 21.75Z" fill="white" />
                            </svg>
                        </li>
                        <li>Find Flight</li>

                    </Link>
                    <Link className="header-find-stays">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.25 10.8141C19.7772 10.6065 19.2664 10.4996 18.75 10.5H5.25C4.73368 10.4995 4.22288 10.6063 3.75 10.8136C3.08166 11.1059 2.51294 11.5865 2.11336 12.1968C1.71377 12.8071 1.50064 13.5205 1.5 14.25V19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25C2.44891 20.25 2.63968 20.171 2.78033 20.0303C2.92098 19.8897 3 19.6989 3 19.5V19.125C3.00122 19.0259 3.04112 18.9312 3.11118 18.8612C3.18124 18.7911 3.27592 18.7512 3.375 18.75H20.625C20.7241 18.7512 20.8188 18.7911 20.8888 18.8612C20.9589 18.9312 20.9988 19.0259 21 19.125V19.5C21 19.6989 21.079 19.8897 21.2197 20.0303C21.3603 20.171 21.5511 20.25 21.75 20.25C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V14.25C22.4993 13.5206 22.2861 12.8073 21.8865 12.1971C21.4869 11.5869 20.9183 11.1063 20.25 10.8141ZM17.625 3.75H6.375C5.67881 3.75 5.01113 4.02656 4.51884 4.51884C4.02656 5.01113 3.75 5.67881 3.75 6.375V9.75C3.75002 9.77906 3.75679 9.80771 3.76979 9.8337C3.78278 9.85969 3.80163 9.8823 3.82486 9.89976C3.84809 9.91721 3.87505 9.92903 3.90363 9.93428C3.93221 9.93953 3.96162 9.93806 3.98953 9.93C4.39896 9.81025 4.82341 9.74964 5.25 9.75H5.44828C5.49456 9.75029 5.53932 9.73346 5.57393 9.70274C5.60855 9.67202 5.63058 9.62958 5.63578 9.58359C5.67669 9.21712 5.85115 8.87856 6.12586 8.63256C6.40056 8.38656 6.75625 8.25037 7.125 8.25H9.75C10.119 8.25003 10.475 8.38606 10.75 8.63209C11.025 8.87812 11.1997 9.21688 11.2406 9.58359C11.2458 9.62958 11.2679 9.67202 11.3025 9.70274C11.3371 9.73346 11.3818 9.75029 11.4281 9.75H12.5747C12.621 9.75029 12.6657 9.73346 12.7003 9.70274C12.735 9.67202 12.757 9.62958 12.7622 9.58359C12.8031 9.21736 12.9773 8.87899 13.2517 8.63303C13.5261 8.38706 13.8815 8.25072 14.25 8.25H16.875C17.244 8.25003 17.6 8.38606 17.875 8.63209C18.15 8.87812 18.3247 9.21688 18.3656 9.58359C18.3708 9.62958 18.3929 9.67202 18.4275 9.70274C18.4621 9.73346 18.5068 9.75029 18.5531 9.75H18.75C19.1766 9.74979 19.6011 9.81057 20.0105 9.93047C20.0384 9.93854 20.0679 9.94 20.0965 9.93473C20.1251 9.92945 20.1521 9.91759 20.1753 9.90009C20.1986 9.88258 20.2174 9.8599 20.2304 9.83385C20.2433 9.8078 20.2501 9.7791 20.25 9.75V6.375C20.25 5.67881 19.9734 5.01113 19.4812 4.51884C18.9889 4.02656 18.3212 3.75 17.625 3.75Z" fill="white" />
                            </svg>
                        </li>
                        <li>Find Stays</li>
                    </Link>
                    {/* <Link to='/personal_account' className='header-default-right-side-logOut__text header-default-right-side-logOut__text_active'>{userEmail}</Link> */}
                    <Link className={active ? 'header-default__favorites_left header-default__favorites_left_active' : 'header-default__favorites_left'}>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M12.0005 21.5C11.6994 21.4996 11.4054 21.4086 11.1568 21.2389C7.47286 18.7381 5.87771 17.0234 4.99786 15.9514C3.12286 13.6663 2.22521 11.3202 2.25052 8.77953C2.28005 5.86813 4.61583 3.5 7.4574 3.5C9.52365 3.5 10.9547 4.66391 11.7882 5.63328C11.8146 5.66368 11.8472 5.68805 11.8838 5.70476C11.9205 5.72146 11.9603 5.73011 12.0005 5.73011C12.0408 5.73011 12.0806 5.72146 12.1172 5.70476C12.1538 5.68805 12.1865 5.66368 12.2129 5.63328C13.0463 4.66297 14.4774 3.5 16.5436 3.5C19.3852 3.5 21.721 5.86812 21.7505 8.78C21.7758 11.3211 20.8772 13.6672 19.0032 15.9519C18.1233 17.0239 16.5282 18.7386 12.8443 21.2394C12.5955 21.4089 12.3016 21.4998 12.0005 21.5Z" fill="#112211" />
                                    </svg>
                                </li>
                                <li>Favorites</li>
                    </Link>
                    {/* <div onClick={logOut} className={active ? 'header-default-right-side__logOut header-default-right-side__logOut_active' : 'header-default-right-side__logOut'}>LogOut</div> */}
                </div>

            </nav>
        </header>
    );
}

export default HeaderDefault;
