import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

export default props => {
  const { title, color = "#04B6D0", disabledButtonNext = false } = props;
  return (
    <ButtonView
    //  style={{ elevation: 8 }}
    >
      <Button
        title={title}
        color={color}
        disabled={disabledButtonNext}
        {...props}
      />
    </ButtonView>
  );
};
const ButtonView = styled.View`
  width: 250px;
  height: 36px;
  margin-top: 28px;
  border-radius: 10px;
  overflow: hidden;
`;
