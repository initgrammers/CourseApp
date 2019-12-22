import React from "react";
import styled from "styled-components";
import {
  TextApp,
  Avatar,
  RatingStarts,
  Button,
  TextWithLink
} from "../../Components/";
import { ScrollView } from "react-native";
const nameTutor = "Cristian";
const starts = 3;
const CommentTutorLayout = props => {
  return (
    <Container>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TextApp
            bold="bold"
            fontSize="24px"
            mt="16px"
            color="white"
          >{`Como estuvo tu clase con ${nameTutor}`}</TextApp>
          <Avatar
            source={{ uri: "https://uinames.com/api/photos/male/9.jpg" }}
          />
          <RatingStarts starts={starts} showLabel={false} />
          <Label>Comentarios</Label>
          <TextInput
            multiline
            numberOfLines={3}
            autoCorrect={true}
            autoCapitalize={"sentences"}
            style={{ textAlignVertical: "top" }}
          />
          <Button title="Enviar" />
          <TextWithLink
            text="Experimentaste problemas?"
            linkText="Reporta aquí"
          />
        </ScrollView>
      </Content>
    </Container>
  );
};
export default CommentTutorLayout;
const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  width: 90%;
  height: 70%;
  background-color: #384862;
  padding: 12px;
  border-radius: 10px;
`;
const Label = styled.Text`
  font-family: "montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin-top: 14px;
  color: #3eb8c5;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 80px;
  font-size: 12px;
  background-color: white;
  font-family: "montserrat";
  margin-top: 11px;
  border-radius: 10px;
`;
