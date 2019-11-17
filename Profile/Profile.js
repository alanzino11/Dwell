import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileHeader from './ProfileHeader';
import StatusBarBackground from '../utils/StatusBarBackground';
import ProfilePicture from './ProfilePicture';
import TaskCards from './TaskCards';

const username = 'dareanclark';

const Profile = () => {
  return (
    <View>
      <StatusBarBackground/>
      <ProfileHeader username={username}/>
      <ProfilePicture/>
      {/* <TaskCards/> */}
    </View>
  )
}

export default Profile;