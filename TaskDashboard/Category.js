import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';

const Category = ({ backgroundcolor, image, category }) => {
  return (
    <View style={{ height: 100, width: 150, marginRight: 5, marginLeft: 5, marginBottom: 5, marginTop: 5 }}>
      <TouchableOpacity>
        <View style={{ backgroundColor: backgroundcolor, borderRadius: 15, height: 100, width: 150, alignItems: 'center', justifyContent: 'center', }}>
          <Image source={image} style={{ height: 60, width: 60 }}/>
          <Text style={{  fontSize: 15 }}>{category}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Category;