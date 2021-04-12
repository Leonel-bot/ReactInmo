import firebase from 'firebase'
import 'firebase/firestore'

//const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)

firebase.initializeApp(process.env.REACT_APP_FIREBASE_CONFIG);
//firebase.initializeApp(firebaseConfig);




export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()




