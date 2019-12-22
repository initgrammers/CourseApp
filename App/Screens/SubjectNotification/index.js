import React, { Component } from "react";
import Layout from "./SubjectNotification.layout";
import {
  getUser,
  getUpcomingTutorships
} from "../../services/Firebase/Firebase";

class SubjectNotification extends Component {
  state = {
    upComingTutorships: []
  };
  onPressSubject = item => {
    const { navigation } = this.props;
    navigation.navigate("CommentTutor");
  };

  componentDidMount() {
    const uid = getUser().uid;
    getUpcomingTutorships(uid).then(snapshot => {
      const values = snapshot.val() ? snapshot.val() : {};
      const upComingTutorships = Object.values(values);
      this.setState({ upComingTutorships });
    });
  }

  render() {
    return (
      <Layout
        subjects={this.state.upComingTutorships}
        onPressSubject={this.onPressSubject}
      />
    );
  }
}
export default SubjectNotification;
