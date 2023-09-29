// import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Cookies from 'js-cookie';


const registration  = async (userData) => {
    if (!userData.firstname || !userData.lastname || !userData.phone) {
        console.log('Name field is missing');
        return;
    }
    if (userData.password !== userData.passwordConfirm) {
        console.log('Your passwords do not match');
    } else {
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;
            console.log(user);
            try {
                await updateProfile(user, {
                  displayName: userData.firstname + " " + userData.lastname,
                  phoneNumber: userData.phone,
                });
              } catch (error) {
                console.error(error);
                alert(error.message);
              }
            const updatedUser = {
                userName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber
            }
            Cookies.set('user', JSON.stringify(updatedUser));
            // console.log('user successfully added');
        } catch (error) {
            alert(error);
        }
    }
}

export { registration };