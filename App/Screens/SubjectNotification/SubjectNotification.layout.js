import React from "react";
import { FlatList } from "react-native";
import { Container, TextApp, SubjectResume } from "../../Components";
const SubjectNotification = props => {
  const { subjects = [], onPressSubject } = props;
  return (
    <Container>
      <TextApp style={{ textAlign: "center" }}>Tutorías Pendientes</TextApp>
      <FlatList
        data={subjects}
        renderItem={({ item }) => (
          <SubjectResume item={item} onPress={item => onPressSubject(item)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};
export default SubjectNotification;
