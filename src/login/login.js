import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Cookies from 'js-cookie';

const login = async (userData) => { 
    const auth = getAuth(app);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
        const user = userCredential.user;
        const USER = {
            userName: user.displayName,
            email: user.email,
        }
        Cookies.set('user', JSON.stringify(USER));
        alert('Next page is in beta and may contain bugs');
        return true; 
    } catch (error) {
        alert(error.code);
        alert(error.message);
        return false; 
    }
}

export { login };
