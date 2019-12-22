import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default props => {
  return (
    <TouchableOpacity
      {...props}
      onPress={props.onPress}
      style={{ position: "absolute", top: 40, right: 27 }}
    >
      <CloseView>
        <Ionicons name="ios-close" size={34} color="#384862" />
      </CloseView>
    </TouchableOpacity>
  );
};

const CloseView = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
