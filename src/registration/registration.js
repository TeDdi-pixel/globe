// import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Cookies from 'js-cookie';


const registration  = async (userData) => {
    if (userData.password !== userData.passwordConfirm) {
        console.log('Your passwords do not match');
    } else {
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${user.firstname} ${user.lastname}`,
                phoneNumber: user.phone,
            });
            
            const updatedUser = {
                userName: user.displayName,
                email: user.email,
            }
            Cookies.set('user', JSON.stringify(updatedUser));
            // console.log('user successfully added');
            
        } catch (error) {
            alert(error);
        }
    }
}

export { registration };