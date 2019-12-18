import React from "react";
import { Container, Text } from "../../Components";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";

const SearchSubjectLayout = props => {
  const { navigateFormSubject } = props;
  return (
    <Container>
      <SearchView style={{ elevation: 12 }}>
        <InputSearch placeholder="Buscar materia" />
        <SearchIcon source={require("../../assets/icons/buscar.png")} />
      </SearchView>
      <Text>Sugerencias</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubjectsView>
          {subjects.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateFormSubject(item)}
            >
              <CardSubject>
                <ImageCard source={item.image} />
                <TextCard>{item.title}</TextCard>
              </CardSubject>
            </TouchableOpacity>
          ))}
        </SubjectsView>
      </ScrollView>
    </Container>
  );
};
export default SearchSubjectLayout;
const subjects = [
  {
    title: "Inglés",
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    image: require("../../assets/images/química.png")
  }
];
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
