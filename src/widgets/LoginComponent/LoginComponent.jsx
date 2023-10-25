import React from 'react';
import logo from './../../assets/img/Group 1.svg';
import { Link } from 'react-router-dom';
import LoginForm from '../../entities/LoginForm/LoginForm';
import RegAlternetives from '../../entities/RegAlternetives/RegAlternetives';
const LoginComponent = () => {
    
    return (
        <>
            <div className="login" >
                <div className="login__container">

                    <div className="login-left">
                        <div className="login-logo">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <h1 className='login__title'>Login</h1>
                        <h3 className="login-description">Login to access your Golobe account</h3>

                        <LoginForm />

                        <div className="login-new-account">
                            Don’t have an account? <Link to='/signup' className="login-form-sighUp-color"><span >Sign up</span></Link>
                        </div>
                        <RegAlternetives />
                    </div>
                    <div className="login-right">
                        <img src="./assets/img/736762a1b63e564588a75ef07ab10d25.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>


    );
}

export default LoginComponent;
