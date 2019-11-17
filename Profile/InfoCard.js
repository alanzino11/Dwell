import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const UpperCardText = styled.Text`
  align-self: center;
  font-size: 27;
  color: gray;
`;

const LowerCardText = styled.Text`
  align-self: center;
  font-size: 13;
  color: gray;
`;

const InfoCard = ({ number, type }) => {
  return (
    <View style={{ height: 85, width: 85, borderRadius: 20, borderColor: 'gray', borderWidth: 1, justifyContent: 'center', flexDirection: 'column' }}>
      <UpperCardText>{number}</UpperCardText>
      <LowerCardText>{type}</LowerCardText>
    </View>
  )
}

export default InfoCard;