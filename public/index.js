import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp6qJ4v90wNPhG-BDR5iZDuuTQ5qKihMs",
    authDomain: "finance-tracker-df058.firebaseapp.com",
    databaseURL: "https://finance-tracker-df058-default-rtdb.firebaseio.com",
    projectId: "finance-tracker-df058",
    storageBucket: "finance-tracker-df058.appspot.com",
    messagingSenderId: "978791051084",
    appId: "1:978791051084:web:21b50034fa3bea211ce9e9",
    measurementId: "G-2PH20R7BZ8"
  };

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const element = document.getElementById("size");

element.addEventListener("click", getAuth());
element.addEventListener("click", print());
function print(){
    console.log("clciked");
}

