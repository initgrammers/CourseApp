import React, { Component } from "react";
import SearchSubject from "./Screens/SearchSubject/index";
import FormSubject from "./Screens/FormSubject/";
import SubjectStackNavigator from "./Navigation/SubjectStackNavigator";
import * as Font from "expo-font";
export default class AppEntry extends Component {
  state = {
    isLoading: true
  };
  async componentDidMount() {
    await Font.loadAsync({
      montserrat: require("./assets/fonts/Montserrat-Regular.ttf")
    });
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <></> : <SubjectStackNavigator />;
  }
}
