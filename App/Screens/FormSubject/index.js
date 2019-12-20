import React, { Component } from "react";
import Layout from "./FormSubject.layout";
import { connect } from "react-redux";

class FormSubject extends Component {
  state = {
    selectService: 0,
    selectSite: 0,
    isDateTimePickerVisible: false,
    tutoringDate: "",
    hours: "",
    descriptionTheme: ""
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  onValueChangeHours = value => {
    this.setState({ hours: value });
  };
  onValueChangeServicePicker = value => {
    this.setState({ selectService: value });
  };
  onValueChangeSitePicker = value => {
    this.setState({ selectSite: value });
  };
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  onValueDescriptionTheme = value => {
    this.setState({ descriptionTheme: value });
  };
  handleDatePicked = date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    this.setState({
      tutoringDate: `${day}/${month}/${year} - ${hour}:${minute}`
    });
    this.hideDateTimePicker();
  };
  onPressNext = () => {
    const {
      selectService,
      selectSite,
      tutoringDate,
      hours,
      descriptionTheme
    } = this.state;
    const { navigation } = this.props;
    const subject = navigation.getParam("item");

    navigation.navigate("DetailsBuySubject", {
      details: {
        selectService,
        selectSite,
        tutoringDate,
        hours,
        subject,
        descriptionTheme
      }
    });
  };
  render() {
    const { navigation } = this.props;
    const subject = navigation.getParam("item");
    const {
      selectService,
      selectSite,
      isDateTimePickerVisible,
      tutoringDate,
      hours
    } = this.state;

    return (
      <Layout
        onPressNext={this.onPressNext}
        goBack={this.goBack}
        subject={subject}
        date={tutoringDate}
        hours={hours}
        selectService={selectService}
        selectSite={selectSite}
        onValueChangeServicePicker={this.onValueChangeServicePicker}
        onValueChangeSitePicker={this.onValueChangeSitePicker}
        isDateTimePickerVisible={isDateTimePickerVisible}
        handleDatePicked={this.handleDatePicked}
        onValueChangeHours={this.onValueChangeHours}
        hideDateTimePicker={this.hideDateTimePicker}
        showDateTimePicker={this.showDateTimePicker}
        onValueDescriptionTheme={this.onValueDescriptionTheme}
      />
    );
  }
}

// export default connect(mapStateToProps, mapDispachToProps)(FormSubject);
export default FormSubject;
