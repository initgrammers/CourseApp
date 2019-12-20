import React from "react";
import styled from "styled-components";
import {
  Container,
  CoverHeader,
  Button,
  Title,
  TopicText,
  DotWithTopicText
} from "../../Components";

const DetailsBuySubjectLayout = props => {
  const { details, onPressConfirm } = props;
  const { descriptionTheme } = details;
  const description =
    descriptionTheme !== "" && descriptionTheme.lenght > 10
      ? [details.descriptionTheme]
      : ["Clases"];
  return (
    <Container>
      <Center>
        <Title>Detalles de la compra</Title>
        <CoverHeader
          subject={details.subject}
          style={{
            borderRadius: 10,
            overflow: "hidden",
            elevation: 10
          }}
        />
      </Center>
      <TopicText title="Fecha: " text={details.tutoringDate} />
      <DotWithTopicText title="Temas: " list={description} />
      <TopicText title="Lugar: " text={details.selectSite} />
      <TopicText title="Horas: " text={details.hours} />
      <ContainerPay>
        {["Tarifa Materia", "Costo total"].map((item, index) => (
          <DetailContainer key={index}>
            <TextDetail left={true}>{item}</TextDetail>
            <TextDetail>$ 5.00</TextDetail>
          </DetailContainer>
        ))}
        <DetailContainer>
          <TextDetail left={true}>Pago en Efectivo</TextDetail>
          <TextDetail bold={true}>
            $ {Number(details.hours * 5).toFixed(2)}
          </TextDetail>
        </DetailContainer>
      </ContainerPay>
      <Center>
        <Button title="Confirmar" onPress={onPressConfirm} />
      </Center>
    </Container>
  );
};
export default DetailsBuySubjectLayout;
const TextDetail = styled.Text`
  flex: 1;
  font-family: "montserrat";
  font-size: 14px;
  text-align: ${props => (props.left ? "left" : "right")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;
const DetailContainer = styled.View`
  flex-direction: row;
  padding: 8px 8px;
`;
const ContainerPay = styled.View`
  margin-top: 21px;
  flex-direction: column;
  width: 100%;
  height: 109px;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;
const Topic = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #535157;
  font-family: "montserrat";
`;
const TextTopic = styled.Text`
  font-size: 12px;
  line-height: 17px;
  color: black;
  font-family: "montserrat";
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  text-align: justify;
`;
const Dot = styled.View`
  width: 5px;
  height: 5px;
  margin-right: 20px;
  top: 6px;
  background-color: #bfbfbe;
`;
const ContainerText = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Center = styled.View`
  align-items: center;
  margin-top: 37px;
`;
