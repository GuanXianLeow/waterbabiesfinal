import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAF9S3cD3zGsxOw_w8YVwUqsrJMygO80o8",
    authDomain: "waterbabies-c3f9d.firebaseapp.com",
    projectId: "waterbabies-c3f9d",
    storageBucket: "waterbabies-c3f9d.appspot.com",
    messagingSenderId: "29811900897",
    appId: "1:29811900897:web:39bad08717e35b20c5d2a0"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;