import React from 'react';
import { View, Text, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TaskReview from './TaskReview';
import Header from '../utils/Header';
import DoubleHeader from '../utils/DoubleHeader';
import CategoryView from './CategoryView';
import CategoryPage from './CategoryPage';
import StatusBarBackground from '../utils/StatusBarBackground';
import BoldHeader from '../utils/BoldHeader'

const txt = "Anna has completed Washing the Butter.";
const txt2 = 'Hannah has cleaned the chairs and the floors and the table and under the table, youre doing great hanah lorem ipsum blah blah blah';
const taskString = "Review Tasks";

const TaskDashboard = (props) => {
  return (
    <View>
      <StatusBarBackground />
      <BoldHeader header='Dwell'/>
      <Header txt={taskString}/>
      <TaskReview txt={txt} />
      <TaskReview txt={txt2}/>
      {/* <DoubleHeader textLeft='Incomplete Tasks' textRight='Days Passed'/> */}
      <CategoryView {...props.navigation.navigate}/>
    </View>
  )
}

export default TaskDashboard;