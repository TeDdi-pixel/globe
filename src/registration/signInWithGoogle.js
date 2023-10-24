import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./../firebase";

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('User registered successfully');
    } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            if(errorMessage){
                alert('Firebase: Error auth/unauthorized-domain');
            }
            console.log('errorCode:' + errorCode);
            console.log('errorMessage:' + errorMessage);
            console.log('errorEmail:' + email);
            console.log('errorCredential:' + credential);
    }
};

export {signInWithGoogle};