import React, { Component } from "react";
import Layout from "./FormSubject.layout";
class FormSubject extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { navigation } = this.props;
    const subject = navigation.getParam("item");
    console.log(subject);
    return <Layout goBack={this.goBack} subject={subject} />;
  }
}
export default FormSubject;
