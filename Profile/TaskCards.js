import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import TaskCard from './TaskCard';

const TaskCards = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TaskCard text='Completed Tasks'/>
      <TaskCard text='Incomplete Tasks'/>
    </View>
  )
}

export default TaskCards;