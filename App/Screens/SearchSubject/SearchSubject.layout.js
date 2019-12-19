import React from "react";
import { Container, Text } from "../../Components";
import styled from "styled-components";
import { ScrollView, TouchableWithoutFeedback } from "react-native";

const SearchSubjectLayout = props => {
  const { navigateFormSubject, subjects, onChangeText, noData } = props;
  return (
    <Container>
      <SearchView style={{ elevation: 12 }}>
        <InputSearch onChangeText={onChangeText} placeholder="Buscar materia" />
        <SearchIcon source={require("../../assets/icons/buscar.png")} />
      </SearchView>
      <Text>Sugerencias</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {noData ? (
          <Text>Sin coincidencias</Text>
        ) : (
          <SubjectsView>
            {subjects.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigateFormSubject(item)}
              >
                <CardSubject style={{ elevation: 5 }}>
                  <ImageCard source={item.image} />
                  <TextCard>{item.title}</TextCard>
                </CardSubject>
              </TouchableWithoutFeedback>
            ))}
          </SubjectsView>
        )}
      </ScrollView>
    </Container>
  );
};
export default SearchSubjectLayout;

const SearchView = styled.View`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.5);
`;
const SearchIcon = styled.Image`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 12px;
  left: 34px;
`;
const InputSearch = styled.TextInput`
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 320px;
  height: 40px;
  border-radius: 10px;
  font-size: 17px;
  font-size: 14px;
  color: #bfbfbe;
  font-family: "montserrat";
  padding-left: 47px;
`;

// const Text = styled.Text`
//   font-size: 14px;
//   font-family: "montserrat";
//   color: #535157;
//   margin-left: 6px;
//   margin-top: 38px;
// `;

const SubjectsView = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardSubject = styled.View`
  width: 175px;
  height: 120px;
  margin-top: 12px;
  overflow: hidden;
  border-radius: 12px;
`;
const TextCard = styled.Text`
  font-size: 16px;
  font-family: "montserrat";
  color: white;
  font-weight: 900;
  margin-left: 8px;
  margin-top: 13px;
  position: absolute;
`;
const ImageCard = styled.Image`
  width: 100%;
  height: 100%;
`;
