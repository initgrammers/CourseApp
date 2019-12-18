import React from "react";
import styled from "styled-components";
const TextWithStyle = props => {
  const { children } = props;
  return (
    <Text style={{ width: "100%" }} mode="dropdown">
      {children}
    </Text>
  );
};
export default TextWithStyle;
const Text = styled.Text`
  font-size: 14px;
  font-family: "montserrat";
  color: #535157;
  margin: 38px 0 12px 6px;
`;
