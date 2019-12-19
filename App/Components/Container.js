import React from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
const hideKeyboard = () => {
  Keyboard.dismiss();
};
export default props => {
  const { children, cover = false, bgColor = "white" } = props;
  return (
    <Container bgColor={bgColor}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        {cover ? <>{children}</> : <Content>{children}</Content>}
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.bgColor};
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  margin: 32px 13px 20px 13px;
`;
