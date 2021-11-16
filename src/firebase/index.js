import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5p0C1fZoyKkMHk84bmsw8R1pwIG9MQIE",
  authDomain: "react-file-uploader-1956b.firebaseapp.com",
  projectId: "react-file-uploader-1956b",
  storageBucket: "react-file-uploader-1956b.appspot.com",
  messagingSenderId: "1054017033848",
  appId: "1:1054017033848:web:212b3517df1bd550507f8d",
  measurementId: "G-N7TL95TYLY"
};

const appStorage = firebase.storage()
const appStore = firebase.firestore()

export {appStorage, appStore}