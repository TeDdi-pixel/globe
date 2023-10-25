import { Link } from "react-router-dom";
import SignUpForm from "../../entities/SignUpForm/SignUpForm";
import RegAlternetives from "../../entities/RegAlternetives/RegAlternetives";
import logo from './../../assets/img/Group 1.svg';
function SignUp() {
    return (
        <>
            <div className="signUp" >
                <div className="signUp__container">
                    <div className="signUp-left">
                        <img src="./assets/img/502aa13bd224ab3d9fde2b1e45a0eec9.jpg" alt="" />
                    </div>
                    <div className="signUp-right">
                        <div className="signUp-logo">
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <h1 className="signUp__title">Sign up</h1>
                        <h3 className="signUp-description">Let’s get you all st up so you can access your personal account.</h3>

                        <SignUpForm />

                        <div className="signUp-new-account">
                            Already have an account? <Link to='/login'><span className="signUp-form-agrement-color">Login</span></Link>
                        </div>
                        <RegAlternetives />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;

