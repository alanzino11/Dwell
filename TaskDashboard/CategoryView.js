import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Category from './Category';
import cat from '../images/cat.png';
import dishes from '../images/dishes.png';
import budr from '../images/budr.png';
import plant from '../images/plant.png';

const CategoryView = (props) => {
  return (
    <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'center', }}>
      <Category image={cat} backgroundcolor='#FCE8C7' category='Pet'/>
      <Category image={dishes} backgroundcolor='#9BDCFF' category='Kitchen'/>
      <Category image={budr} backgroundcolor='#FFC0E9' category='Fridge'/>
      <Category image={plant} backgroundcolor='#9AF8C4' category='Outdoors'/>
    </View>
  )
}

export default CategoryView;