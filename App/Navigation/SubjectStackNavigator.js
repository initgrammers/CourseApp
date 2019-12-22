import { createStackNavigator } from "react-navigation-stack";
import SearchSubject from "../Screens/SearchSubject";
import FormSubject from "../Screens/FormSubject";
import DetailsBuySubject from "../Screens/DetailsBuySubject/";
import InfoTutor from "../Screens/InfoTutor/";
import TutorProfile from "../Screens/TutorProfile";
import Login from "../Screens/Login";
const SubjectStackNavigator = createStackNavigator(
  {
    SearchSubject,
    FormSubject,
    DetailsBuySubject,
    InfoTutor,
    TutorProfile
  },
  {
    headerMode: "none"
  }
);
SubjectStackNavigator.navigationOptions = ({ navigation }) => {
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  let tabBarVisible = routeName == "SearchSubject" ? true : false;
  return {
    tabBarVisible
  };
};
export default SubjectStackNavigator;
