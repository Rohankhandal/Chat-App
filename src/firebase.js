import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAq4hMh6UVPDPkAukhdOpS1MOKPBOycQbM",
    authDomain: "whats-app-clone-55e8a.firebaseapp.com",
    projectId: "whats-app-clone-55e8a",
    storageBucket: "whats-app-clone-55e8a.appspot.com",
    messagingSenderId: "587202871067",
    appId: "1:587202871067:web:b0c0e918064970d4821dbe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;

