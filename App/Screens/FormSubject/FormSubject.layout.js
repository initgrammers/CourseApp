import React from "react";
import { Button, Container, Picker, CoverHeader } from "../../Components";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
const SearchSubjectLayout = props => {
  const {
    goBack,
    subject,
    onValueChangeServicePicker,
    onValueChangeSitePicker,
    onValueChangeHours,
    onValueDescriptionTheme,
    selectService,
    selectSite,
    isDateTimePickerVisible,
    handleDatePicked,
    hideDateTimePicker,
    showDateTimePicker,
    date,
    hours,
    onPressNext
  } = props;
  const { optionsSite, optionsServices } = subject;
  const disabledButtonNext = !(
    selectService !== 0 &&
    selectSite !== 0 &&
    date &&
    !isNaN(hours) &&
    Number(hours) <= 5 &&
    Number(hours) >= 1
  );

  return (
    <Container cover={true}>
      <CoverHeader subject={subject} goBack={goBack} showGoBack={true} />
      <ScrollView>
        <ContainerDetails>
          <RichText>
            <Label>Ingresa los temas que necesitas:</Label>
            <TextInput
              multiline
              numberOfLines={3}
              autoCorrect={true}
              autoCapitalize={"sentences"}
              style={{ textAlignVertical: "top" }}
              onChangeText={onValueDescriptionTheme}
            />
          </RichText>
          <Picker
            options={optionsServices}
            onValueChange={onValueChangeServicePicker}
            selectedItemValue={selectService}
          />
          <Picker
            onValueChange={onValueChangeSitePicker}
            selectedItemValue={selectSite}
            options={optionsSite}
          />
          <TouchableOpacity onPress={showDateTimePicker}>
            <ContainerInput
              style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
            >
              <Label>
                {date
                  ? `La tutoria será el ${date}`
                  : "Selecciona aqui la fecha de la tutoria"}
              </Label>
              <DateTimePicker
                mode="datetime"
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
              />
            </ContainerInput>
          </TouchableOpacity>
          <HoursInput
            placeholder="Número de horas"
            keyboardType="phone-pad"
            style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
            onChangeText={onValueChangeHours}
          />
          <Button
            onPress={onPressNext}
            title="Siguiente"
            disabledButtonNext={disabledButtonNext}
          />
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
  font-family: "montserrat";
  margin-top: 8px;
  border-radius: 10px;
`;
const HoursInput = styled.TextInput`
  margin-top: 12px;
  font-family: "montserrat";
  width: 340px;
  height: 26px;
`;
const ContainerDetails = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const RichText = styled.View`
  margin-top: 20px;
  width: 340px;
  height: 180px;
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 0 21px;
`;
const ContainerInput = styled.View`
  margin-top: 12px;
  width: 340px;
  height: 46px;
  background-color: white;
`;
