import React from 'react';
import PasswordInput from '../../shared/PasswordInput';
import { useForm } from 'react-hook-form';
import { login } from '../../servises/login';
import TextFieldInput from '../../shared/TextFieldInput';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (userData) => {
        try {
            await login(userData);
            navigate('/flights');
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <TextFieldInput type={'email'} label={'Email'} name={'email'} register={register} fullWidth={'fullWidth'}/>
            {/* <Password  /> */}
            <PasswordInput
                htmlFor={'outlined-adornment-password'}
                name={'password'}
                label={"Password"}
                id={'outlined-adornment-password'}
                register={register}
            />
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
    );
}

export default LoginForm;
