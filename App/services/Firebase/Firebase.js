import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVRAFdzbVqoCdvEXb6KyWQgXLhTqFV5HM",
  authDomain: "courses-app-f5386.firebaseapp.com",
  databaseURL: "https://courses-app-f5386.firebaseio.com",
  projectId: "courses-app-f5386",
  storageBucket: "courses-app-f5386.appspot.com",
  messagingSenderId: "19515244323",
  appId: "1:19515244323:web:1ae253163555dd41081696"
};
firebase.initializeApp(firebaseConfig);

const getSubjects = () => {
  return firebase
    .database()
    .ref("subjects")
    .once("value");
};

const getPlaces = () => {
  return firebase
    .database()
    .ref("location")
    .once("value");
};
const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const getUpcomingTutorships = uid => {
  return firebase
    .database()
    .ref(`students/${uid}/tutorships/upcoming`)
    .once("value");
};

const getUser = () => firebase.auth().currentUser;
export { getSubjects, getPlaces, signIn, getUser, getUpcomingTutorships };
