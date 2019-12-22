import React from "react";
import styled from "styled-components";
import {
  TextApp,
  Avatar,
  RatingStarts,
  DotWithTopicText,
  CloseView,
  Comment
} from "../../Components";
import { ScrollView, FlatList, SafeAreaView } from "react-native";
const starts = 3.7;
const works = 38;

const comments = [
  {
    name: "Raúl Perez",
    comment: "Cristian es un excelente profesor, pasé gracias a él."
  },
  {
    name: "Carla Alvarez",
    comment:
      "Buen profesor. Gracias por toda la ayuda, química no será más un problema"
  },

  {
    name: "Alfonso Andrade",
    comment: "Buen profesor, recomendado."
  },

  {
    name: "Alberto Caballero",
    comment: "5⭐ más profes así ."
  }
];
export default props => {
  const { goBack } = props;
  return (
    <Container>
      <Content style={{ elevation: 12 }}>
        <CloseView onPress={goBack} />
        <ScrollView>
          <TextApp fontSize="20px" mt="12px" color="white" bold="500">
            Cristian Ronda
          </TextApp>
          <Avatar />
          <TextApp fontSize="20px" mt="12px" color="white" bold="300">
            Profesor
          </TextApp>
          <RatingStarts starts={starts} />
          <TextApp mt="12px" color="white" bold="300">
            {`${works} trabajos completados`}
          </TextApp>
          <DotWithTopicText
            mt="0"
            ml="26px"
            isLigh={true}
            title="Habilidades: "
            list={[
              "Fisico - Quimico",
              "Desarrollo de software",
              "Microsoft Office"
            ]}
          />
        </ScrollView>
      </Content>
      <SafeAreaView style={{ flex: 1 }}>
        <CommentsContainer>
          <TextApp fontSize="20px" bold="500" color="black" align="left">
            Comentarios
          </TextApp>
          <FlatList
            data={comments}
            keyExtractor={(item, index) => item.name.toString()}
            renderItem={({ item }) => <Comment {...item} />}
          />
        </CommentsContainer>
      </SafeAreaView>
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
`;
const Content = styled.View`
  background-color: #384862;
  padding: 32px 12px 8px 12px;
  height: 70%;
`;
const CommentsContainer = styled.View`
  margin: 17px;
`;
