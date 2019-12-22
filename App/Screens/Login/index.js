import React, { Component } from "react";
import Layout from "./Login.layout";
import { Alert } from "react-native";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onPressLoginGoogle = () => {
    Alert.alert("Login", "Login Google");
  };
  onPressLoginFacebook = () => {
    Alert.alert("Login", "Login Facebook");
  };
  onPressSignUp = () => {
    Alert.alert("Singup", "Sign Up!");
  };
  onChangeTextEmail = value => {
    this.setState({ email: value });
  };
  onChangeTextPassword = value => {
    this.setState({ password: value });
  };
  onPressLogin = () => {
    Alert.alert("Login", "Login!");
    const { navigation } = this.props;
    navigation.navigate("SubjectBottomTabNavigator");
  };
  render() {
    return (
      <Layout
        onPressLoginGoogle={this.onPressLoginGoogle}
        onPressLoginFacebook={this.onPressLoginFacebook}
        onChangeTextEmail={this.onChangeTextEmail}
        onChangeTextPassword={this.onChangeTextPassword}
        onPressLogin={this.onPressLogin}
      />
    );
  }
}
export default Login;
