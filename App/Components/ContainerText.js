import React from "react";
import styled from "styled-components";

export default props => {
  const { children } = props;
  return <ContainerText>{children}</ContainerText>;
};
const ContainerText = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;
