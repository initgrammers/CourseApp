import React from "react";
import { Picker } from "react-native";

const PickerGeneric = props => {
  return (
    <Picker style={{ width: "100%" }} mode="dropdown">
      <Picker.Item label="Escoge el servicio que necesitas." />
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};
export default PickerGeneric;
