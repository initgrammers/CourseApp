import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CloseView from "./CloseView";
import styled from "styled-components";

export default props => {
  const { subject, goBack, showGoBack = false } = props;
  return (
    <Cover {...props}>
      <CoverImage source={subject.image} />
      <CoverText>{subject.title}</CoverText>
      {showGoBack && <CloseView onPress={goBack} />}
    </Cover>
  );
};
const Cover = styled.View`
  width: 100%;
  height: 186px;
`;
const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const CoverText = styled.Text`
  font-size: 24px;
  font-family: "montserrat";
  color: white;
  font-weight: bold;
  position: absolute;
  top: 28px;
  left: 27px;
`;
// const CloseView = styled.View`
//   width: 36px;
//   height: 36px;
//   border-radius: 18px;
//   background-color: white;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   top: 28px;
//   right: 27px;
// `;
