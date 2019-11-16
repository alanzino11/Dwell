import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskDashboard from './TaskDashboard/TaskDashboard';
import Header from './utils/Header';
import StatusBarBackground from './utils/StatusBarBackground';
import Category from './TaskDashboard/Category';

export default function App() {
  return (
    <View>
      <StatusBarBackground/>
      <Header txt="Dwell" fontstyle="PingFangTC-Medium"/>
      <TaskDashboard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
