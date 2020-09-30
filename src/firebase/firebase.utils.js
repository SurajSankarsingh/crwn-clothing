import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBV6oNcAaigDExpxpa_MPzqs2xnoenNGBY",
  authDomain: "crwn-db-7c1fb.firebaseapp.com",
  databaseURL: "https://crwn-db-7c1fb.firebaseio.com",
  projectId: "crwn-db-7c1fb",
  storageBucket: "crwn-db-7c1fb.appspot.com",
  messagingSenderId: "868840725330",
  appId: "1:868840725330:web:caad36a08981a88fa2788b",
  measurementId: "G-48714Z9LLM",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
