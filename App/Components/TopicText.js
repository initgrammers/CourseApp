import React from "react";
import styled from "styled-components";
import ContainerText from "./ContainerText";
export default props => {
  const {
    title,
    text,
    fontSizeTitle = "14px",
    fontSizeText = "14px",
    colorTitle = "#535157",
    colorText = "black"
  } = props;
  return (
    <ContainerText>
      <Topic color={colorTitle} fontSize={fontSizeTitle}>
        {title}
      </Topic>
      <TextTopic color={colorText} fontSize={fontSizeText}>
        {text}
      </TextTopic>
    </ContainerText>
  );
};
const Topic = styled.Text`
  font-weight: bold;
  font-size: ${props => props.fontSize};
  line-height: 17px;
  color: ${props => props.color};
  font-family: "montserrat";
`;
const TextTopic = styled.Text`
  font-size: ${props => props.fontSize};
  line-height: 17px;
  color: ${props => props.color};
  font-family: "montserrat";
  text-align: justify;
`;
