// import { updatePhoneNumber, RecaptchaVerifier, signInWithPhoneNumber, getAuth} from "firebase/auth";
// import {app} from './../firebase';
// const updatePhoneNumberAsync = async (phoneNumber) => {
//     if (!phoneNumber) {
//       return;
//     }
  
//     try {
//       const auth = getAuth();
//       const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//         'size': 'invisible',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // ...
//         }
//       }, auth);
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
//       const verificationCode = await prompt('Enter the verification code:');
//       await confirmationResult.confirm(verificationCode);
//       await updatePhoneNumber(phoneNumber);
//     } catch (error) {
//       alert(error);
//     }
//   };

// export { updatePhoneNumberAsync };

