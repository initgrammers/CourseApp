import React, { Component } from "react";
import Layout from "./SubjectNotification.layout";
const SUBJECTS_CONST = [
  {
    id: 1,
    title: "Fisica",
    image: require("../../assets/images/física.png"),
    date: "12/12/2019 08:00",
    place: "Biblioteca Sistemas",
    price: "15"
  },
  {
    id: 2,
    title: "Química",
    image: require("../../assets/images/química.png"),
    date: "15/12/2019 14:00",
    place: "Biblioteca Central",
    price: "10"
  },
  {
    id: 3,
    title: "Geometria",
    image: require("../../assets/images/geometria.png"),
    date: "12/12/2019 08:00",
    place: "Biblioteca ICB",
    price: "20"
  },
  {
    id: 4,
    title: "Geometria",
    image: require("../../assets/images/geometria.png"),
    date: "12/12/2019 08:00",
    place: "Biblioteca ICB",
    price: "20"
  }
];
class SubjectNotification extends Component {
  onPressSubject = item => {
    const { navigation } = this.props;
    navigation.navigate("CommentTutor");
  };
  render() {
    return (
      <Layout subjects={SUBJECTS_CONST} onPressSubject={this.onPressSubject} />
    );
  }
}
export default SubjectNotification;
