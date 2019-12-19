import React from "react";
import { Picker } from "react-native";
import styled from "styled-components";
const PickerGeneric = props => {
  const { options = [], onValueChange, selectedItemValue } = props;
  return (
    <ContainerPicker>
      <Picker
        itemStyle={{
          fontFamily: "montserrat",
          fontWeight: "bold"
        }}
        style={{ width: "100%" }}
        mode="dialog"
        onValueChange={onValueChange}
        selectedValue={selectedItemValue}
      >
        {options.map((item, index) => (
          <Picker.Item
            style={{ fontWeigth: 600 }}
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </ContainerPicker>
  );
};
export default PickerGeneric;
const ContainerPicker = styled.View`
  font-family: "montserrat";
  margin-top: 11px;
  width: 340px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #f5f5f5;
`;
