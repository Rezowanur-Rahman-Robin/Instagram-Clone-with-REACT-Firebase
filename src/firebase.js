import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyBuHHyD__eIIsUEaxjX0v1AuQjnZbjY3eQ",
  authDomain: "instagram-clone-firebase-5f298.firebaseapp.com",
  projectId: "instagram-clone-firebase-5f298",
  storageBucket: "instagram-clone-firebase-5f298.appspot.com",
  messagingSenderId: "248224620451",
  appId: "1:248224620451:web:ea49d14de1d9faa60b0416",
  measurementId: "G-4P436TJWX1"
  // apiKey: "AIzaSyBucH7Kzm8Ds5CbuUs8uQJlzTPh3eZcTzA",
  // authDomain: "instagram-clone-23884.firebaseapp.com",
  // databaseURL: "https://instagram-clone-23884.firebaseio.com",
  // projectId: "instagram-clone-23884",
  // storageBucket: "instagram-clone-23884.appspot.com",
  // messagingSenderId: "671034896143",
  // appId: "1:671034896143:web:3aceafdf2319c9f1fc587a",
});



const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
