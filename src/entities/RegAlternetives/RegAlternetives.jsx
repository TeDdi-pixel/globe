import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../../servises/signInWithGoogle';
import {BsFacebook, BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc';
const RegAlternetives = () => {
    const navigate = useNavigate();
    const googleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate('/flights');
        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className="signUp-altentative">
            <div className="signUp-altentative-text">
                <span className="signUp-altentative-span"></span>
                <span className="signUp-altentative-span-text">Or Sign up with</span>
                <span className="signUp-altentative-span"></span>
            </div>
            <div className="signUp-altentative-apps">
                <Link className="signUp-altentative-apps-icons">
                    <BsFacebook />
                </Link>
                <Link className="signUp-altentative-apps-icons" onClick={googleSignIn}>
                    <FcGoogle />
                </Link>
                <Link className="signUp-altentative-apps-icons">
                    <BsApple />
                </Link>
            </div>
        </div>
    );
}

export default RegAlternetives;
