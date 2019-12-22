import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export default props => {
  const { mt = "21px", icon = "ios-help" } = props;
  return (
    <ContainerInput mt={mt}>
      <Ionicons
        name={icon}
        size={24}
        color="white"
        style={{ position: "absolute", top: 0, left: 34 }}
      />
      <Input
        {...props}
        style={{ borderBottomColor: "#f5f5f5", borderBottomWidth: 1 }}
      />
    </ContainerInput>
  );
};
const ContainerInput = styled.View`
  margin-top: ${props => props.mt};
  height: 26;
`;
const Input = styled.TextInput`
  width: 300px;
  height: 100%;
  margin: 0 auto;
  color: #f5f5f5;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  font-family: "montserrat";
  padding-left: 32px;
`;
