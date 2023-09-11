import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from 'react-hook-form';
import { setUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({user}) => {
                
                dispatch(setUser({
                    email : user.email,
                    id : user.uid,
                    token : user.accessToken,
                }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }


    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('email')}
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <div></div>
            <input
                {...register('password')}
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">hello</button>
        </form>
        <Link to='/'>Вернуться</Link>
        </>
        

    );
}

export default Login;
