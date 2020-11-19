import firebase from "firebase";

//auth
import "firebase/auth";
//databse can like sql, mangodb
import "firebase/database";
//storage - images, videos, photos, pdf, fonts
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAs2ECZdE-1gp7a7QMYBPZ6Pt_iAzY1Ats",
    authDomain: "hotstar-d9464.firebaseapp.com",
    databaseURL: "https://hotstar-d9464.firebaseio.com",
    projectId: "hotstar-d9464",
    storageBucket: "hotstar-d9464.appspot.com",
    messagingSenderId: "962561874879",
    appId: "1:962561874879:web:d04087725e9c2ffa295f0a"
};

//initialize firebase and react application
firebase.initializeApp(firebaseConfig);

export default firebase;