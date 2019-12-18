import React from "react";
import styled from "styled-components";
export default props => {
  const { children, cover = false } = props;
  return (
    <Container>
      {cover ? <>{children}</> : <Content>{children}</Content>}
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  flex: 1;
`;
const Content = styled.View`
  flex: 1;
  background-color: white;
  margin: 32px 13px 20px 13px;
`;
