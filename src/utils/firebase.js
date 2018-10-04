import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCZSDNPsFaBbwgY0P3tySbPbUr1uD39hgI",
  authDomain: "content-testing.firebaseapp.com",
  databaseURL: "https://content-testing.firebaseio.com",
  projectId: "content-testing",
  storageBucket: "content-testing.appspot.com",
  messagingSenderId: "895732552641"
};

firebase.initializeApp(config);
export default firebase;
