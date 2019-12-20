import { createStore } from "redux";
import reducer from "./Reducers";
const initialState = {};

const store = createStore(reducer, initialState);
export default store;
