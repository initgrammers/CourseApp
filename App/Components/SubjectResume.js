import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
export default props => {
  const { item } = props;
  const { title, date, place, price, image } = item;
  return (
    <TouchableOpacity>
      <CardContainer>
        <SubjectImage source={image} />
        <DetailTutorial>
          <TitleSubjectNotification>{title}</TitleSubjectNotification>
          <TextSubjectNotification>{date}</TextSubjectNotification>
          <TextSubjectNotification>{place}</TextSubjectNotification>
        </DetailTutorial>
        <TitleSubjectNotification>
          {`$ ${Number(price).toFixed(2)}`}
        </TitleSubjectNotification>
      </CardContainer>
    </TouchableOpacity>
  );
};
const CardContainer = styled.View`
  align-self: center;
  width: 95%;
  height: 73px;
  background-color: #f5f5f5;
  border-radius: 10px;
  flex-direction: row;
  padding: 11px 9px;
  margin-top: 11px;
`;
const SubjectImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: red;
  align-self: center;
  margin: 0 auto;
  flex: 0 0 50px;
`;
const DetailTutorial = styled.View`
  flex: 5;
  height: 100%;
  padding-left: 14px;
  flex-direction: column;
`;
const TitleSubjectNotification = styled.Text`
  font-family: "montserrat";
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
`;
const TextSubjectNotification = styled.Text`
  margin-top: 3px;
  flex-wrap: wrap;
  font-family: "montserrat";
  font-size: 12px;
  color: #535157;
`;
