import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
export default props => {
  const { text, linkText, onPress } = props;
  return (
    <LabelContainer>
      <Label>{text}</Label>
      <TouchableOpacity onPress={onPress}>
        <Label color="#3eb8c5">{linkText}</Label>
      </TouchableOpacity>
    </LabelContainer>
  );
};
const Label = styled.Text`
  justify-content: flex-start;
  margin: 13px auto;
  font-family: "montserrat";
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${props => (props.color ? props.color : "#f5f5f5")};
  margin-left: 4px;
`;
const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: center;
`;
