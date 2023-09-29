// import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, updatePhoneNumber   } from "firebase/auth";
import Cookies from 'js-cookie';
import {updatePhoneNumberAsync} from './updatePhoneNumber'

  
const registration  = async (userData) => {
    
    if (!userData.firstname || !userData.lastname) {
        console.log('Name field is missing');
        return;
    }
    if (userData.password !== userData.passwordConfirm) {
        console.log('Your passwords do not match');
    } else {
        try {
            console.log(userData.phone);
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            const user = userCredential.user;
            console.log(user);
            // console.log(user.phoneNumber);
            try {
                await updateProfile(user, {
                  displayName: userData.firstname + " " + userData.lastname,
                });
                // await updatePhoneNumberAsync(user, userData.phone);
              } catch (error) {
                console.error(error);
                alert(error.message);
              }
              
            const updatedUser = {
                userName: user.displayName,
                email: user.email,
                phoneNumber: user.phoneNumber,
            }
            Cookies.set('user', JSON.stringify(updatedUser));
            // console.log('user successfully added');
        } catch (error) {
            alert(error);
        }
    }
}

export { registration };