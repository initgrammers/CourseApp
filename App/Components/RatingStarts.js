import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
const renderStart = rating => {
  let lenght = 1;
  if (rating > 1 && rating <= 5) {
    lenght = Math.round(rating);
  } else if (rating > 5) {
    lenght = 5;
  }
  let starts = [];
  for (let index = 0; index < lenght; index++) {
    starts.push(
      <Ionicons key={index} name="ios-star" size={32} color="#d5a12a" />
    );
  }
  return starts;
};

export default props => {
  const { starts, showLabel = true } = props;
  return (
    <ContainerStart>
      {renderStart(starts)}
      {showLabel && <TextStart>{`(${starts})`}</TextStart>}
    </ContainerStart>
  );
};

const TextStart = styled.Text`
  margin-left: 11px;
  font-family: "montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  align-self: center;
  color: #3eb8c5;
`;

const ContainerStart = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
