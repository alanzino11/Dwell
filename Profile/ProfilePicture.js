import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import hedgehog from '../images/hedge.jpg';
import InfoCard from './InfoCard';

const ProfilePicture = () => {
  return (
    <View style={{ alignItems: 'flex-start', marginLeft: 30, marginRight: 30, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
      <Image source={hedgehog} style={{ height: 85, width: 85, borderRadius: 40 }}/>
      <InfoCard number={0} type='tokens'/>
      <InfoCard number={2} type='roommates'/>
    </View>
  )
}

export default ProfilePicture;