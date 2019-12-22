import { createStackNavigator } from "react-navigation-stack";
import SubjectNotification from "../Screens/SubjectNotification";
import CommentTutor from "../Screens/CommentTutor";
const PedingSubjectStackNavigator = createStackNavigator(
  {
    SubjectNotification,
    CommentTutor
  },
  {
    headerMode: "none"
  }
);
export default PedingSubjectStackNavigator;
