import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';

const CardView = styled.View`
  height: 50;
  width: 75;
  color: pink;  
`;

const TaskCard = ({ text, borderColor, backgroundCardColor, onPF }) => {
  return (
    <View style={{ width: 150 }}>
      <TouchableOpacity onPress={onPF}>
        <View style={{ height: 50, width: 150, borderColor, borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundCardColor }}>
          <Text style={{ alignSelf: 'center', alignContent: 'center', color: 'gray' }}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TaskCard;