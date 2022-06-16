import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSAa6gKcsMkoYIj4Z8lbz4VC3cP2qOdNY",
  authDomain: "e-lib-d60b9.firebaseapp.com",
  projectId: "e-lib-d60b9",
  storageBucket: "e-lib-d60b9.appspot.com",
  messagingSenderId: "148891756774",
  appId: "1:148891756774:web:4d1208a75e33de2502f327",
  measurementId: "G-7MN96B1N2K"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
