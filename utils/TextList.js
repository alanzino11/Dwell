import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styled from 'styled-components';

const Item = styled.View`
  marginLeft: 30;
  marginRight: 30;
  marginBottom: 10;
`;

const ItemText = styled.Text`
  fontSize: 16;
`;

const TextList = ({ text }) => {
  return (
    <Item>
      <ItemText>{text}</ItemText>
    </Item>
  )
}

export default TextList;