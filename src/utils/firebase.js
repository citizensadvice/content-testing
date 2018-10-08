import firebase from "firebase";

const devConfig = {
  apiKey: "AIzaSyCZSDNPsFaBbwgY0P3tySbPbUr1uD39hgI",
  authDomain: "content-testing.firebaseapp.com",
  databaseURL: "https://content-testing.firebaseio.com",
  projectId: "content-testing",
  storageBucket: "content-testing.appspot.com",
  messagingSenderId: "895732552641"
};

const prodConfig = {
  apiKey: "AIzaSyB66xZ4sV3BQSn__zCnCmSOWoH_8squ8Hk",
  authDomain: "customerjourney-214813.firebaseapp.com",
  databaseURL: "https://customerjourney-214813.firebaseio.com",
  projectId: "customerjourney-214813",
  storageBucket: "customerjourney-214813.appspot.com",
  messagingSenderId: "1085078162963"
};

firebase.initializeApp(prodConfig);
export default firebase;
