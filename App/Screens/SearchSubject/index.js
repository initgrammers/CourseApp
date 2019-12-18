import React, { Component } from "react";
import Layout from "./SearchSubject.layout";
class SearchSubject extends Component {
  navigateFormSubject = item => {
    this.props.navigation.navigate("FormSubject", { item });
  };
  render() {
    return <Layout navigateFormSubject={this.navigateFormSubject} />;
  }
}
export default SearchSubject;
