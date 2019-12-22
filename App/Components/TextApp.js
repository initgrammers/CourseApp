import React from "react";
import styled from "styled-components";

export default props => {
  const { children } = props;
  return <TextApp {...props}>{children}</TextApp>;
};

const TextApp = styled.Text`
  font-weight: ${props => (props.bold ? props.bold : "500")};
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
  margin-top: ${props => (props.mt ? props.mt : "0")};
  line-height: 24px;
  font-family: "montserrat";
  color: ${props => (props.color ? props.color : "#535157")};
  margin-bottom: ${props => (props.mb ? props.mb : "21px")};
  text-align: ${props => (props.align ? props.align : "center")};
  flex-wrap: wrap;
`;
