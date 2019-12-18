import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FormSubject from "../Screens/FormSubject";
import SearchSubject from "../Screens/SearchSubject";
// import Login from '../Screens/Login';
//Descomenta esto para programar tu pantalla
const SubjectStackNavigator = createStackNavigator(
  {
    //Login,
    SearchSubject,
    FormSubject
  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(SubjectStackNavigator);
