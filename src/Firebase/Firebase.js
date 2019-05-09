import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

class Firebase{
  constructor(){
    firebase.initializeApp(firebaseConfig)
  }

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  currentUser(){

    this.auth.onAuthStateChanged(function(user) {
    if (user){
      console.log(user)
      return user
    } else {
      console.log("NOPE")
    }
  })};

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.dv.ref(`users/${uid}`);

  user = () => this.db.ref('users');
}

export default Firebase;
