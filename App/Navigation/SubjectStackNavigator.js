import { createStackNavigator } from "react-navigation-stack";
import SearchSubject from "../Screens/SearchSubject";
import FormSubject from "../Screens/FormSubject";
import DetailsBuySubject from "../Screens/DetailsBuySubject/";
import TutorProfile from "../Screens/TutorProfile/index";
import SubjectNotification from "../Screens/SubjectNotification";
// import Login from '../Screens/Login';
//Descomenta esto para programar tu pantalla
const SubjectStackNavigator = createStackNavigator(
  {
    //Login,
    // SubjectNotification,
    SearchSubject,
    FormSubject,
    DetailsBuySubject,
    TutorProfile
  },
  {
    headerMode: "none"
  }
);
export default SubjectStackNavigator;
