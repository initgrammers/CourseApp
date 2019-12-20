import React from "react";
import { FlatList } from "react-native";
import { Container, Title, SubjectResume } from "../../Components";
const SubjectNotification = props => {
  const { subjects = [] } = props;
  return (
    <Container>
      <Title style={{ textAlign: "center" }}>Tutorías Pendientes</Title>
      <FlatList
        data={subjects}
        renderItem={({ item }) => <SubjectResume item={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};
export default SubjectNotification;
