import React from "react";
import styled from "styled-components";
import {
  Container,
  InputWithIcon,
  Button,
  LoginButtonSN,
  TextWithLink
} from "../../Components";
export default props => {
  const {
    onPressLoginGoogle,
    onPressLoginFacebook,
    onPressLogin,
    onChangeTextEmail,
    onChangeTextPassword
  } = props;
  return (
    <Container bgColor="#384862">
      <Logo />
      <TextLogin uppercase>InitGrammers</TextLogin>
      <InputWithIcon
        icon="ios-person"
        placeholder="Usuario"
        keyboardType="email-address"
        onChangeText={onChangeTextEmail}
      />
      <InputWithIcon
        icon="ios-key"
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={onChangeTextPassword}
      />
      <Button
        onPress={onPressLogin}
        title="LOG IN"
        width={320}
        height={48}
        textSize="20px"
      ></Button>
      <TextLogin>ó inicia sesión con:</TextLogin>
      <ContainerButtons>
        <LoginButtonSN
          colorButton="white"
          colorText="black"
          imageButton={require("../../assets/icons/google.png")}
          text="Google"
          onPress={onPressLoginGoogle}
        />
        <LoginButtonSN
          colorButton="#4267B2"
          colorText="white"
          imageButton={require("../../assets/icons/facebook-blanco.png")}
          onPress={onPressLoginFacebook}
          text="Facebook"
        />
      </ContainerButtons>
      <TextWithLink text="No tienes cuenta?" linkText="Registrate" />
    </Container>
  );
};

const Logo = styled.Image`
  width: 126px;
  height: 118px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 75px;
`;
const TextLogin = styled.Text`
  margin: 0 auto;
  color: #f5f5f5;
  margin-top: 13px;
  font-family: "montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: ${props => (props.uppercase ? "uppercase" : "none")};
`;
const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 31px;
`;
