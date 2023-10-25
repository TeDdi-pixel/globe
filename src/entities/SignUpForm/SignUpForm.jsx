import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { registration } from "../../servises/registration";
import TextFieldInput from '../../shared/ui/TextFieldInput';
import PasswordInput from "../../shared/ui/PasswordInput";

const SignUpForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm()

    const onSubmit = async (userData) => {
        try {
            await registration(userData);
            navigate('/flights');
        } catch (error) {
            alert(error);
        }
    };


    return (
        <form className="signUp-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="signUp-form__flex">
                {/* First name */}
                <TextFieldInput type={'text'} label={'First Name'} name={'firstname'} register={register} 
                className={'signUp-form-input-short'}/>
                {/* Last name */}
                <TextFieldInput type={'text'} label={'Last Name'} name={'lastname'} register={register} 
                className={'signUp-form-input-short'}/>
            </div>
            <div className="signUp-form__flex">
                {/* Email */}
                <TextFieldInput type={'email'} label={'Email'} name={'email'} register={register} 
                className={'signUp-form-input-short'}/>
                {/* Phone */}
                <TextFieldInput type={'tel'} label={'Phone Number'} name={'phone'} register={register} 
                className={'signUp-form-input-short'}/>
            </div>
            {/* <Password  /> */}
            <PasswordInput
                htmlFor={'outlined-adornment-password'}
                name={'password'}
                label={"Password"}
                id={'outlined-adornment-password'}
                register={register}
            />
            {/* <PasswordConfirm { /> */}
            <PasswordInput
                htmlFor={'outlined-adornment-password-confirm'}
                name={'passwordConfirm'}
                label={"Confirm Password"}
                id={'outlined-adornment-password-confirm'}
                register={register}
            />

            <div className="signUp-form-agrement">
                <input type="checkbox" />
                <p>I agree to all the <span className="signUp-form-agrement-color">Terms</span> and <span className="signUp-form-agrement-color">Privacy Policies</span></p>
            </div>

            <button
                type="submit"
                className="signUp-form-submit"
            >Create accout</button>
        </form>
    );
}

export default SignUpForm;
