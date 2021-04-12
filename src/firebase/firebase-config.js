import firebase from 'firebase'
import 'firebase/firestore'

//const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
const firebaseConfig = {
    apiKey: "AIzaSyDJ8f6S1AAEj51JeDKSMsiGPHI_IOkrmMo",
    authDomain: "react-inmo.firebaseapp.com",
    projectId: "react-inmo",
    storageBucket: "react-inmo.appspot.com",
    messagingSenderId: "140028720241",
    appId: "1:140028720241:web:d4a560802f4e90c8bc17d0",
    measurementId: "G-BPD1J5GPZX"
};


firebase.initializeApp(firebaseConfig);




export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()




