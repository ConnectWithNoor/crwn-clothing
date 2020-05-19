import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBWQL2Z3onfuJQ7LOwgpsk4WYr1BqjfPTk',
  authDomain: 'crwn-clothing-6ff25.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-6ff25.firebaseio.com',
  projectId: 'crwn-clothing-6ff25',
  storageBucket: 'crwn-clothing-6ff25.appspot.com',
  messagingSenderId: '143915416239',
  appId: '1:143915416239:web:4e33a3f9fbb3d3f7cbf25a',
  measurementId: 'G-RQWG3K31LX',
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
export const createUserProfileDocument = async (userAuth, additioanl) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshop = await userRef.get();

  if (!userSnapshop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additioanl,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};
