import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskReview from './TaskReview';
import Header from '../utils/Header';
import DoubleHeader from '../utils/DoubleHeader';
import cat from '../images/cat.png';
import dishes from '../images/dishes.png';
import budr from '../images/budr.png';
import plant from '../images/plant.png';
import CategoryView from './CategoryView';

const txt = "Anna has completed Washing the Butter.";
const txt2 = 'Hannah has cleaned the chairs and the floors and the table and under the table, youre doing great hanah lorem ipsum blah blah blah';
const taskString = "Review Tasks";

const TaskDashboard = () => {
  return (
    <View>
      <Header txt={taskString}/>
      <TaskReview txt={txt} />
      <TaskReview txt={txt2}/>
      {/* <DoubleHeader textLeft='Incomplete Tasks' textRight='Days Passed'/> */}
      <CategoryView />
    </View>
  )
}

export default TaskDashboard;