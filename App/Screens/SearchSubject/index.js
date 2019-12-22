import React, { Component } from "react";
import Layout from "./SearchSubject.layout";
import { getSubjects } from "../../services/Firebase/Firebase";

class SearchSubject extends Component {
  state = {
    subjects: [],
    renderListSubject: [],
    noData: false
  };

  navigateFormSubject = item => {
    this.props.navigation.navigate("FormSubject", { item });
  };

  componentDidMount() {
    getSubjects().then(snapshot => {
      const subjects = Object.values(snapshot.val());
      this.setState({ renderListSubject: subjects, subjects });
    });
  }

  onChangeText = value => {
    let searchWord = value.toLowerCase();
    let subjectFilter = this.state.subjects.filter(subject =>
      subject.name.toLowerCase().match(searchWord)
    );
    if (subjectFilter.length == 0) {
      this.setState({ renderListSubject: subjectFilter, noData: true });
    } else {
      this.setState({ renderListSubject: subjectFilter, noData: false });
    }
  };
  render() {
    const { noData, renderListSubject } = this.state;
    console.log(renderListSubject);

    return (
      <Layout
        noData={noData}
        subjects={renderListSubject}
        onChangeText={this.onChangeText}
        navigateFormSubject={this.navigateFormSubject}
      />
    );
  }
}
export default SearchSubject;
