import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = ({ txt, fontstyle }) => {
  return (
    <View 
      style={{borderBottomWidth: 1, borderBottomColor: "gray", borderBottomEndRadius: 100, borderBottomStartRadius: 100, justifyContent: "center", alignItems: "center", height: 30}}>
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "#505659", fontFamily: fontstyle }}>
        {txt}
      </Text>
    </View>
  )
}

export default Header;