import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {LuUserCircle} from 'react-icons/lu'
const RightSide = () => {
    const userData = JSON.parse(Cookies.get('user'));
    const [profileImage, setProfileImage] = useState(userData.userPhoto || localStorage.getItem('userImage'));
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const localStorageProfileImage = localStorage.getItem('userImage');

    useEffect(() => {
        if (!Cookies.get('user'))
            navigate('/flights');
        const username = userData.userName;
        if (username) {
            setUserName(username);
        }
        if (localStorageProfileImage) {
            setProfileImage(localStorageProfileImage);
        }
    }, [localStorageProfileImage])

    return (
        <div className="header-default-right-side header-default-right-side_logged">
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
                            <LuUserCircle stroke='#121' stroke-width="1.3px"/>
                        }
                    </li>
                    <li>
                        {userName}
                    </li>
                </Link>

            </div>

        </div>
    );
}

export default RightSide;
