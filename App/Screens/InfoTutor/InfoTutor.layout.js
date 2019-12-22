import React from "react";
import styled from "styled-components";
import {
  Container,
  TextApp,
  TopicText,
  DotWithTopicText,
  TextWithLink,
  Button,
  Avatar,
  RatingStarts
} from "../../Components";

const starts = 4;

export default props => {
  const { onPressProfile, onPressAccept, onPressCancel } = props;
  return (
    <Container bgColor="#384862">
      <TextApp style={{ textAlign: "center", color: "#F5F5F5" }}>
        Tutor Asignado
      </TextApp>
      <Avatar source={{ uri: "https://uinames.com/api/photos/male/9.jpg" }} />

      <TextApp
        style={{ textAlign: "center", color: "#F5F5F5", fontWeight: "300" }}
      >
        Cristian Ronda
      </TextApp>
      <RatingStarts starts={starts} />
      <TextWithLink linkText="Ver Perfil" onPress={onPressProfile} />
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
      <ContainerButtons>
        <Button
          title="Aceptar"
          width={150}
          height={48}
          onPress={onPressAccept}
        />
        <Button
          title="Cancelar"
          width={150}
          height={48}
          color="red"
          onPress={onPressCancel}
        />
      </ContainerButtons>
    </Container>
  );
};

const ContainerDetailsTutor = styled.View`
  margin: 10px 33px;
`;
const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 55px;
`;
