import { combineReducers } from "redux";
import user from "./userReducer";
import subject from "./subjectReducer";
export default combineReducers({
  user,
  subject
});
