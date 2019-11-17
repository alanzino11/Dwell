import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const CardView = styled.View`
  height: 50;
  width: 75;
  color: pink;  
`;

const TaskCard = ({ text }) => {
  return (
    <CardView>
      <TouchableOpacity>
        <Text>{text}</Text>
      </TouchableOpacity>
    </CardView>
  )
}

export default TaskCard;