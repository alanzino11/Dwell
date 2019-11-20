import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const BoldHeader = ({ header }) => {
  return (
    <View 
      style={{justifyContent: "center", alignItems: "center", height: 30}}>
      <Text style={{ fontSize: 17, fontWeight: "bold", color: "#505659" }}>
        {header}
      </Text>
    </View>
  )
}

export default BoldHeader;