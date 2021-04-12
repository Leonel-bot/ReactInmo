import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: "react-inmo.firebaseapp.com",
    projectId: "react-inmo",
    storageBucket: "react-inmo.appspot.com",
    messagingSenderId: "140028720241",
    appId: process.env.REACT_APP_ID ,
    measurementId: "G-BPD1J5GPZX"
};

firebase.initializeApp(firebaseConfig);




export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()




