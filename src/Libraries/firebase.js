import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCyUR5VHtpXIa6qtGWBJG8oqIP2NZsQ-uA",
  authDomain: "secretsanta-a1d26.firebaseapp.com",
  databaseURL:
    "https://secretsanta-a1d26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "secretsanta-a1d26",
  storageBucket: "secretsanta-a1d26.appspot.com",
  messagingSenderId: "9861125433",
  appId: "1:9861125433:web:a60a1551ba7bc8537a04e8"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
