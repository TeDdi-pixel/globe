import React from 'react';
import { Link } from 'react-router-dom';

const RightSide = () => {
    return (
        <div className="header-right-side">
            <Link to='/login' className="header-right-side-login__wrapper">
                <span className="header-login">Login</span>
            </Link>
            <Link to='/signup' className="header-signUp__wrapper">
                <span className="header-signUp">Sign up</span>
            </Link>
        </div>
    );
}

export default RightSide;
