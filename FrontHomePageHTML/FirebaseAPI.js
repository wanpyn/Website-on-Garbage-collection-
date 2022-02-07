// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-U6shHrcahGdhoiGLBuqRv235a-kJW14",
    authDomain: "final-cb1d4.firebaseapp.com",
    databaseURL: "https://final-cb1d4-default-rtdb.firebaseio.com",
    projectId: "final-cb1d4",
    storageBucket: "final-cb1d4.appspot.com",
    messagingSenderId: "76633094997",
    appId: "1:76633094997:web:b9bd8fa999f1c464fa0ddc",
    measurementId: "G-Z679JBDE9F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
// const functions = firebase.functions();