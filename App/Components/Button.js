import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export default props => {
  const { title, color = "#04B6D0", disabledButtonNext = false } = props;
  return (
    <Container>
      <TouchableOpacity
        disabled={disabledButtonNext}
        style={{
          width: 250,
          height: 36,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: disabledButtonNext ? "#dddddd" : color,
          elevation: 8
        }}
        {...props}
      >
        <TextButton>{title}</TextButton>
      </TouchableOpacity>
    </Container>
  );
};
const Container = styled.View`
  width: 100%;
  height: 64px;
  padding: 14px 0;
  align-items: center;
`;
const TextButton = styled.Text`
  font-family: "montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
