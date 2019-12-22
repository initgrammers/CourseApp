import React from "react";
import styled from "styled-components";
const auxSource = { uri: "https://uinames.com/api/photos/male/9.jpg" };
export default props => {
  const { source, small } = props;
  return <Avatar source={auxSource} small={small} />;
};
const Avatar = styled.Image`
  align-self: center;
  width: ${props => (props.small ? "140px" : "175px")};
  height: ${props => (props.small ? "140px" : "175px")};
  border-radius: ${props => (props.small ? "70px" : "85px")};
  margin-bottom: 8px;
`;
