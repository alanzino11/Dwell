import React, { useState } from 'react';
import { FlatList, View, Dimensions, ScrollView } from 'react-native';
import BoldHeader from '../utils/BoldHeader';
import StatusBarBackground from '../utils/StatusBarBackground';
import ProfilePicture from './ProfilePicture';
import TaskCard from './TaskCard';
import TextList from '../utils/TextList';

// NEED TO FIX SCROLLING FOR FLATLIST

const username = 'dareanclark';
const completeData = [
  'I have completed a lot today.',
  'I watered the dog.',
  'I cleaned all of the cacti in the whole house they are all very clean.',
  'I took the trash for a walk.',
  'I crowed everyone awake in the morning like a rooster.',
  'I baked pot pie for the while neighborhood, their sisters, and their cousins.',
];
const incompleteData = [
  'I need to clean the dishes.',
  'I need to blow dry the stove.',
  'I need to turn the fan on and off again 6 times.',
  'I need to ward off the spirits.',
  'I need to hang up my A+ on the fridge.'
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = () => {
  const [currData, setCurrData] = useState(completeData);
  const [completeTasksColor, setCompleteTasksColor] = useState('pink')
  const [incompleteTasksColor, setIncompleteTasksColor] = useState('white')

  const alternateTaskType = () => {
    incompleteTasksColor == 'pink' ? (setIncompleteTasksColor('white'), setCompleteTasksColor('pink')) : (setIncompleteTasksColor('pink'), setCompleteTasksColor('white'));
    incompleteTasksColor == 'pink' ? setCurrData(completeData) : setCurrData(incompleteData);
    console.log(currData);
  }

  return (
    <View>
      <View style={{ height: 175, width: width }}>
        <StatusBarBackground/>
        <BoldHeader header={username}/>
        <ProfilePicture/>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width, height: 70 }}>
        <View style={{ marginLeft: 50 }}>
         <TaskCard
          text='Completed Tasks'
          borderColor='gray'
          backgroundCardColor={completeTasksColor}
          onPF={alternateTaskType}
        />
        </View>
        <View style={{ marginRight: 50 }}>
          <TaskCard
            text='Incomplete Tasks'
            borderColor='gray'
            backgroundCardColor={incompleteTasksColor}
            onPF={alternateTaskType}
          />
        </View>
      </View>
      <View style={{ width, height }}>
        <FlatList
          data={currData}
          renderItem={({item}) => <TextList text={item}/>}
          keyExtractor={item => item}
        />
      </View>
    </View>
  )
}

export default Profile;