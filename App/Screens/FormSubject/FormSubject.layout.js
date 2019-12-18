import React from "react";
import { Container, Picker } from "../../Components";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
const SearchSubjectLayout = props => {
  const { goBack, subject } = props;
  return (
    <Container cover={true}>
      <Cover>
        <CoverImage source={subject.image} />
        <CoverText>{subject.title}</CoverText>
        <CloseView>
          <TouchableOpacity onPress={goBack}>
            <Ionicons name="ios-close" size={34} color="#384862" />
          </TouchableOpacity>
        </CloseView>
      </Cover>
      <ScrollView>
        <ContainerDetails>
          <SelectService>
            <Picker />
          </SelectService>
          <RichText>
            <Label>Enumera los temas que necesitas:</Label>
            <TextInput
              multiline
              numberOfLines={3}
              autoCorrect={true}
              autoCapitalize={"sentences"}
              style={{ textAlignVertical: "top" }}
            />
          </RichText>
          <TimePicker>
            {/* <DateTimePicker
              value={new Date()}
              mode="datetime"
              // is24Hour={true}
              display="default"
              onChange={(event, date) => console.log(date)}
            /> */}
          </TimePicker>
          <SelectPlace>
            <Picker />
          </SelectPlace>
          <Total>$ 800</Total>
          <ButtonNext title="Siguiente" />
        </ContainerDetails>
      </ScrollView>
    </Container>
  );
};
export default SearchSubjectLayout;

const Label = styled.Text`
  font-size: 14px;
  font-family: "montserrat";
  font-style: normal;
  font-weight: 500;
  padding-top: 13px;
`;
const TextInput = styled.TextInput`
  width: 100%;
  height: 120px;
  font-size: 16px;
  padding-bottom: 8px;
  background-color: white;
  margin-top: 8px;
  border-radius: 10px;
`;
const ContainerDetails = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Cover = styled.View`
  width: 100%;
  height: 186px;
`;
const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const CoverText = styled.Text`
  font-size: 24px;
  font-family: "montserrat";
  color: white;
  font-weight: bold;
  position: absolute;
  top: 28px;
  left: 27px;
`;
const CloseView = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: white;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 28px;
  right: 27px;
`;
const SelectService = styled.View`
  margin-top: 36px;
  width: 340px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #dddddd;
`;
const RichText = styled.View`
  margin-top: 26px;
  width: 340px;
  height: 180px;
  border-radius: 10px;
  background-color: #dddddd;
  padding: 0 21px;
`;
const TimePicker = styled.View`
  margin-top: 31px;
  width: 340px;
  height: 26px;
  border-radius: 10px;
  background-color: #dddddd;
`;

const SelectPlace = styled.View`
  margin-top: 27px;
  width: 340px;
  height: 48px;
  border-radius: 10px;
  background-color: #dddddd;
`;
const Total = styled.Text`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  text-align: right;
  font-size: 24px;
  line-height: 29px;
  padding-right: 16px;
  padding-top: 12px;
  font-weight: bold;
  background-color: #f5f5f5;
  height: 48px;
`;
const ButtonNext = styled.Button`
  margin-top: 123px;
  width: 250px;
  height: 48px;
`;
