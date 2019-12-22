import { createSwitchNavigator } from "react-navigation";
import SubjectBottomTabNavigator from "./SubjectBottomTabNavigator";
import Login from "../Screens/Login";
const SwitchWithLogin = createSwitchNavigator(
  {
    Login,
    SubjectBottomTabNavigator
  },
  {
    initialRouteName: "SubjectBottomTabNavigator"
  }
);
export default SwitchWithLogin;
