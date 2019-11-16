import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';


const Task = styled.View`
  flexDirection: row;
  justify-content: space-between;
  align-items: center;
  width: 300;
  margin: auto;
`;

const TaskText = styled.View`
  width: 250;
`;

const TaskReview = ({ txt }) => {
  return (
    <Task>
      <TaskText>
        <Text>{txt}</Text>
      </TaskText>
      <Icon name="ios-close" size={40} iconColor="green"/>
      <Icon name="ios-checkmark" size={40} iconColor="green"/>
    </Task>
  )
}

export default TaskReview;