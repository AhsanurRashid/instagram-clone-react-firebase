import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9Qc2-hyKpsQvKYdkrKPACjwoH6Q8MidY",
    authDomain: "instagram-clone-react-fi-fa7b3.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-fi-fa7b3.firebaseio.com",
    projectId: "instagram-clone-react-fi-fa7b3",
    storageBucket: "instagram-clone-react-fi-fa7b3.appspot.com",
    messagingSenderId: "139160817737",
    appId: "1:139160817737:web:eb943de44deaf91c892f98",
    measurementId: "G-YT1PNDJN0P"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()


export {db, auth, storage}   