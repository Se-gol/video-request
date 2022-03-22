// import {collection, getDocs, getFirestore} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
const {initializeApp} = require("firebase/app");

const {collection, getDocs, getFirestore} = require('firebase/firestore');

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBQ8ZbGFTeK7kl67caTK4BEHT58Bw-YKRs",
    authDomain: "galaxia-scouting.firebaseapp.com",
    projectId: "galaxia-scouting",
    storageBucket: "galaxia-scouting.appspot.com",
    messagingSenderId: "266691765680",
    appId: "1:266691765680:web:c08e913dcf9ab4280ee275",
    measurementId: "G-BV172DBM9L"
});

const querySnapshot = getDocs(collection(getFirestore(firebaseApp), "scouters"));
querySnapshot.then(results => {
    results.forEach(v => {
        console.log(v.data());
    })
});