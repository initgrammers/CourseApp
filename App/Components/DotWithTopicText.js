import React from "react";
import styled from "styled-components";
import ContainerText from "./ContainerText";
export default props => {
  const { title, list = [], isLigh, mt = "27px", ml = "0px" } = props;
  return (
    <ContainerTopic mt={mt} ml={ml}>
      <Topic isLigh={isLigh}>{title}</Topic>
      {list.map((text, index) => (
        <ContainerText key={index}>
          <Dot isLigh={isLigh} />
          <TextTopic isLigh={isLigh} marginTop="8px">
            {text}
          </TextTopic>
        </ContainerText>
      ))}
    </ContainerTopic>
  );
};
const ContainerTopic = styled.View`
  flex-direction: column;
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
  width: 100%;
`;
const Topic = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: ${props => (props.isLigh ? "#F5F5F5" : "#535157")};
  font-family: "montserrat";
`;
const Dot = styled.View`
  width: 5px;
  height: 5px;
  margin-right: 20px;
  top: 6px;
  background-color: #bfbfbe;
`;
const TextTopic = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: ${props => (props.isLigh ? "#F5F5F5" : "#535157")};
  font-family: "montserrat";
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  text-align: justify;
`;
