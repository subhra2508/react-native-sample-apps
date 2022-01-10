import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';


const TextScreen = () => {
    const [name,setName] = useState('');
    return (
    <View>
        <Text>Hello I am Text Screen</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize={false}
        value={name}
        onChangeText={(newValue) =>setName(newValue)}
        />
        <Text>my name is : {name}</Text>
        <Text>{name.length < 5 ?'the name should be atleast five char': ''} </Text>
    </View>
    )
}



const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }
})


export default TextScreen;