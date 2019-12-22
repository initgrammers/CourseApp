import React, { Component } from "react";
import Layout from "./InfoTutor.layout";
import { Alert } from "react-native";
class InfoTutor extends Component {
  onPressProfile = () => {
    const { navigation } = this.props;
    navigation.navigate("TutorProfile");
  };
  onPressAccept = () => {
    Alert.alert("Accept", "Accept");
  };
  onPressCancel = () => {
    Alert.alert("Cancel", "Cancel");
  };
  render() {
    return (
      <Layout
        onPressProfile={this.onPressProfile}
        onPressAccept={this.onPressAccept}
        onPressCancel={this.onPressCancel}
      />
    );
  }
}
export default InfoTutor;
