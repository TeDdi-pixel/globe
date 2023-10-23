import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Link, useNavigate} from 'react-router-dom';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { login } from '../../login/login';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from 'js-cookie';
import {signInWithGoogle} from '../../registration/signInWithGoogle';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };
    const onSubmit = async (userData) => {
        try {
            await login(userData);
            navigate('/flights');
        }catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="login" >
                <div className="login__container">

                    <div className="login-left">
                        <div className="login-logo">
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="111" height="36" viewBox="0 0 111 36" fill="none">
                                    <path d="M14.7282 5.57671L17.9466 8.00815L15.9805 10.5097C17.3379 12.0457 17.8382 13.7984 17.8382 15.7295C17.8382 17.9092 17.0161 20.9843 14.1195 22.3068C17.0512 23.7727 17.7649 25.8823 17.7649 28.1353C17.7649 32.9981 14.0463 36 8.93505 36C3.82384 36 0 32.8898 0 28.1353H4.32413C4.32413 30.4233 6.43362 31.9242 8.93505 31.9242C11.4365 31.9242 13.4026 30.5667 13.4026 28.1353C13.4026 25.7038 11.1146 24.5949 8.93505 24.5949C3.4319 24.5949 0 21.2361 0 15.7295C0 10.2229 4.00229 6.79083 8.93823 6.79083C10.3339 6.79083 11.7615 6.96929 12.9788 7.79145L14.7282 5.57671ZM4.32413 15.7295C4.32413 18.8046 6.39857 20.6274 8.93505 20.6274C11.4365 20.6274 13.5109 18.7696 13.5109 15.7295C13.5109 12.6894 11.4397 10.7614 8.93823 10.7614C6.39856 10.7614 4.32413 12.6543 4.32413 15.7295Z" fill="#112211" />
                                    <path d="M50.5663 0V24.99H46.2422V0H50.5663Z" fill="#112211" />
                                    <path d="M69.9987 16.1947C69.9987 21.2711 66.5317 25.382 60.8119 25.382C55.0921 25.382 51.6602 21.2711 51.6602 16.1947C51.6602 11.1534 55.1622 7.00752 60.7768 7.00752C66.3915 7.00752 69.9987 11.1534 69.9987 16.1947ZM56.0193 16.1947C56.0193 18.8747 57.6285 21.3795 60.8087 21.3795C63.9889 21.3795 65.5981 18.8779 65.5981 16.1947C65.5981 13.5498 63.7403 10.9749 60.8087 10.9749C57.6636 10.9749 56.0193 13.5498 56.0193 16.1947Z" fill="#112211" />
                                    <path d="M75.4503 0V9.76082C76.4859 7.93804 79.3824 6.93742 81.2402 6.93742C86.3865 6.93742 90.2135 10.0827 90.2135 16.1597C90.2135 21.9499 86.3163 25.382 81.135 25.382C78.9905 25.382 76.8109 24.6681 75.4503 22.5586L75.1635 24.99H71.0879V0H75.4503ZM75.7339 16.1597C75.7339 19.34 78.0919 21.3444 80.8451 21.3444C83.6333 21.3444 85.8511 19.2348 85.8511 16.1597C85.8511 12.9794 83.6333 11.0132 80.8451 11.0132C78.0951 11.01 75.7339 13.0845 75.7339 16.1597Z" fill="#112211" />
                                    <path d="M96.6992 19.2317C97.7125 21.1819 100.032 22.0136 102.922 20.962C104.433 20.4107 106.208 19.1201 106.794 17.804L110.357 19.4356C109.27 21.8862 106.734 23.7982 104.213 24.7159C98.5028 26.7937 93.8249 24.5024 91.8939 19.1934C90.0584 14.1553 92.1647 9.27963 97.5404 7.32301C103.082 5.30584 107.792 7.47278 109.633 14.5249L96.6992 19.2317ZM104.468 12.5619C103.416 10.5097 101.345 10.0476 98.9935 10.9017C96.7757 11.7079 95.3545 13.4446 95.5329 15.8123L104.468 12.5619Z" fill="#112211" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M39.7626 11.9898C38.3489 9.04025 35.4017 7.00752 31.4702 7.00752C25.8555 7.00752 22.3535 11.1534 22.3535 16.1947C22.3535 19.4132 23.733 22.2436 26.2006 23.8843C26.3412 23.779 26.4258 23.7107 26.4258 23.7107C27.6566 22.9077 28.8573 22.0623 30.0258 21.1765C27.8244 20.5287 26.7127 18.4222 26.7127 16.1947C26.7127 13.5498 28.3601 10.9749 31.5021 10.9749C34.269 10.9749 36.0793 13.2686 36.274 15.7501C37.4868 14.5464 38.6508 13.292 39.7626 11.9898ZM31.0601 25.3735C34.5418 22.9057 37.7611 20.0866 40.6652 16.963C40.3328 21.6795 36.9335 25.382 31.5052 25.382C31.3553 25.382 31.2069 25.3791 31.0601 25.3735Z" fill="#8DD3BB" />
                                    <path d="M43.3169 4.53785C38.8622 2.89989 35.6597 6.42437 35.6597 6.42437L38.6965 8.18979C39.8341 7.53652 40.3407 8.17067 40.4714 8.51802C40.5638 8.76339 40.4395 9.03108 40.3407 9.17766L39.6014 10.1114C35.6119 14.9233 30.9213 19.1042 25.6858 22.5203C25.6858 22.5203 24.1053 23.795 23.2641 23.8141C22.5567 23.8301 22.2412 23.2341 22.8371 22.3801L21.3713 19.0723C21.3713 19.0723 17.557 21.5707 18.2963 25.9619C18.6085 27.8166 20.3516 29.1359 22.203 28.8013C23.1494 28.6324 24.3188 28.1703 25.7496 27.2239L28.3816 25.5031C33.6171 22.0806 38.3109 17.8869 42.2973 13.0686L43.2022 11.9756C44.5661 10.4237 45.1779 9.1458 45.385 8.13562C45.7037 6.59007 44.7891 5.07959 43.3169 4.53785Z" fill="#8DD3BB" />
                                </svg>
                            </Link>
                        </div>
                        <h1 className='login__title'>Login</h1>
                        <h3 className="login-description">Login to access your Golobe account</h3>
                        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                            {/* Email */}
                            <TextField
                                {...register('email')}
                                required
                                fullWidth
                                label="Email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                            />

                            {/* <Password  /> */}
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    {...register('password')}
                                    required
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <div className='login-form-remember-me'>
                                <div className='login-form-remember-me-left'>
                                    <input type="checkbox" /> 
                                    <span>Remember me</span>
                                </div>
                                <span className="login-form-remember-me-right">Forgot password</span>
                            </div>

                            <button
                                type="submit"
                                className="login-form-submit"
                            >Login</button>
                        </form>

                        <div className="login-new-account">
                        Don’t have an account? <Link to='/signup' className="login-form-sighUp-color"><span >Sign up</span></Link>
                        </div>
                        <div className="login-altentative">
                            <div className="login-altentative-text">
                                <span className="login-altentative-span"></span>
                                <span className="login-altentative-span-text">Or login with</span>
                                <span className="login-altentative-span"></span>
                            </div>
                            <div className="login-altentative-apps">
                                <Link to='/facebook' className="login-altentative-apps-icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M24.334 12.0733C24.334 5.40546 18.9614 0 12.334 0C5.70661 0 0.333984 5.40536 0.333984 12.0733C0.333984 18.0994 4.72223 23.0943 10.459 24V15.5633H7.41211V12.0733H10.459V9.41343C10.459 6.38755 12.2505 4.71615 14.9915 4.71615C16.3045 4.71615 17.6777 4.95195 17.6777 4.95195V7.92313H16.1646C14.6738 7.92313 14.209 8.85381 14.209 9.80864V12.0733H17.5371L17.0051 15.5633H14.209V24C19.9457 23.0943 24.334 18.0995 24.334 12.0733Z" fill="#1877F2" />
                                    </svg>
                                </Link>
                                <Link className="login-altentative-apps-icons"
                                onClick={signInWithGoogle}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                                        <path d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z" fill="#FF3D00" />
                                        <path d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z" fill="#4CAF50" />
                                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                                    </svg>
                                </Link>
                                <Link to='/apple' className="login-altentative-apps-icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M18.1852 12.5555C18.1758 10.957 18.9 9.75234 20.3625 8.86406C19.5445 7.69219 18.307 7.04766 16.6758 6.92344C15.1313 6.80156 13.4414 7.82344 12.8227 7.82344C12.1687 7.82344 10.6734 6.96563 9.49688 6.96563C7.06875 7.00313 4.48828 8.90156 4.48828 12.7641C4.48828 13.9055 4.69687 15.0844 5.11406 16.2984C5.67187 17.8969 7.68281 21.8133 9.78047 21.75C10.8773 21.7242 11.6531 20.9719 13.0805 20.9719C14.4656 20.9719 15.1828 21.75 16.4062 21.75C18.5227 21.7195 20.3414 18.1594 20.8711 16.5563C18.0328 15.218 18.1852 12.6375 18.1852 12.5555ZM15.7219 5.40703C16.9102 3.99609 16.8023 2.71172 16.7672 2.25C15.7172 2.31094 14.5031 2.96484 13.8117 3.76875C13.05 4.63125 12.6023 5.69766 12.6984 6.9C13.8328 6.98672 14.8687 6.40313 15.7219 5.40703Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="login-right">
                        <img src="./assets/img/736762a1b63e564588a75ef07ab10d25.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>


    );
}

export default Login;
