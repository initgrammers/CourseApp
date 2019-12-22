import React, { Component } from "react";
import Layout from "./Login.layout";
import { Alert } from "react-native";
import { signIn } from "../../services/Firebase/Firebase";
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
    const { email, password } = this.state;
    signIn(email, password)
      .then(() => {
        const { navigation } = this.props;
        navigation.navigate("SubjectBottomTabNavigator");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
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
