import React, { Component } from "react";
import Layout from "./DetailsBuySubject.layout";
class DetailBuySubject extends Component {
  onPressConfirm = () => {
    const { navigation } = this.props;
    navigation.navigate("InfoTutor");
  };
  render() {
    const { navigation } = this.props;
    const details = navigation.getParam("details");

    return <Layout details={details} onPressConfirm={this.onPressConfirm} />;
  }
}
export default DetailBuySubject;
