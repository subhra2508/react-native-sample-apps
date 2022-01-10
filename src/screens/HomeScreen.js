import React from 'react';
import reactDom from 'react-dom';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';
   
const HomeScreen = (props) => { 
  return (
    <View>
      <Text style={styles.text}>Welcome to the HomeScreen</Text>
      <Button
      onPress={()=>props.navigation.navigate('Components')}
      title='Go to Components Demo'/>
      <Button
      onPress={()=>props.navigation.navigate('List')}
      title='Go to List Demo'/>
      <Button
      onPress={()=>props.navigation.navigate('Image')}
      title='Go to Image List'/>
      <Button
      onPress={()=>props.navigation.navigate('Counter')}
      title='Go To Counter Screen'/>
      <Button
      onPress={()=>props.navigation.navigate('Color')}
      title='Go To Color Screen'/>
      <Button
      onPress={()=>props.navigation.navigate('Square')}
      title='Go To Square Screen'/>
      <Button
      onPress={()=>props.navigation.navigate('Text')}
      title='Go To Text Screen'/>
    </View>
  
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
