import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ProfileHeader = ({ username }) => {
  return (
    <View 
      style={{justifyContent: "center", alignItems: "center", height: 30}}>
      <Text style={{ fontSize: 17, fontWeight: "bold", color: "#505659" }}>
        {username}
      </Text>
    </View>
  )
}

export default ProfileHeader;