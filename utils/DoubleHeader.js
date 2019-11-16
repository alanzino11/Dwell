import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const DoubleHeader = ({ textLeft, textRight, fontstyle }) => {
  return (
    <View 
      style={{borderBottomWidth: 1, borderBottomColor: "gray", borderBottomEndRadius: 100, borderBottomStartRadius: 100, flexDirection: 'row', height: 25, }}>
      <View style={{flex: 1, }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#505659", fontFamily: fontstyle, }}>{textLeft}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'right', fontSize: 15, fontWeight: "bold", color: "#505659", fontFamily: fontstyle, }}>{textRight}</Text>
      </View>
    </View>
  )
}

export default DoubleHeader;