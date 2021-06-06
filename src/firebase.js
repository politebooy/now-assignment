import firebase from "firebase/app"
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAVimRKTN9bCoEvd44jxk_26N-vEokakI8",
  authDomain: "now-assignment.firebaseapp.com",
  projectId: "now-assignment",
  storageBucket: "now-assignment.appspot.com",
  messagingSenderId: "922471680303",
  appId: "1:922471680303:web:1db614b3442fb5aa6239da"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = app.auth()
export default app

