import React, { Component } from "react";
import Layout from "./TutorProfile.layout";
export default class TutorProfile extends Component {
  goBack = () => {
    alert("Hola");
    this.props.navigation.goBack();
  };
  render() {
    return <Layout goBack={this.goBack} />;
  }
}
