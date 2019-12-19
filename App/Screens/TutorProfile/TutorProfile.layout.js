import React from "react";
import styled from "styled-components";
import {
  Container,
  Title,
  TopicText,
  DotWithTopicText
} from "../../Components";

export default props => {
  return (
    <Container bgColor="#384862">
      <Title style={{ textAlign: "center", color: "#F5F5F5" }}>
        Tutor Asignado
      </Title>
      <Avatar source={{ uri: "https://uinames.com/api/photos/male/9.jpg" }} />
      <Title
        style={{ textAlign: "center", color: "#F5F5F5", fontWeight: "300" }}
      >
        Cristian Ronda
      </Title>
      <ContainerDetailsTutor>
        <TopicText
          title="Celular: "
          text="0987868889"
          colorText="#F5F5F5"
          colorTitle="#F5F5F5"
        />
        <TopicText
          title="Correo: "
          text="cristian.ronda@epn.edu.ec"
          colorText="#F5F5F5"
          colorTitle="#F5F5F5"
        />
        <DotWithTopicText
          isLigh={true}
          title="Habilidades: "
          list={[
            "Fisico - Quimico",
            "Desarrollo de software",
            "Microsoft Office"
          ]}
        />
      </ContainerDetailsTutor>
    </Container>
  );
};

const Avatar = styled.Image`
  align-self: center;
  width: 175px;
  height: 175px;
  border-radius: 85px;
  margin-bottom: 8px;
`;
const ContainerDetailsTutor = styled.View`
  margin: 10px 33px;
`;
