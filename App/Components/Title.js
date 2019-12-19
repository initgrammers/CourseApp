import React from "react";
import styled from "styled-components";

export default props => {
  const { children } = props;
  return <Title {...props}>{children}</Title>;
};

const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-family: "montserrat";
  color: #535157;
  margin-bottom: 21px;
`;
