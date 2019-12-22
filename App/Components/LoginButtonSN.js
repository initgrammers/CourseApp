import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
export default props => {
  const { colorButton, imageButton, colorText, text } = props;
  return (
    <TouchableOpacity {...props}>
      <ButtonLoginSN color={colorButton}>
        <LogoSN source={imageButton} />
        <TextButton color={colorText}>{text}</TextButton>
      </ButtonLoginSN>
    </TouchableOpacity>
  );
};
const ButtonLoginSN = styled.View`
  flex-direction: row;
  align-items: center;
  width: 150px;
  height: 48px;
  background-color: ${props => props.color};
  border-radius: 10px;
`;
const LogoSN = styled.Image`
  width: 30px;
  height: 30px;
  margin-left: 9px;
  margin-right: 15px;
`;
const TextButton = styled.Text`
  color: ${props => props.color};
  font-family: "montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
