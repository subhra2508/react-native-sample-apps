import React from 'react';
import {View,StyleSheet,Text,TextInput} from 'react-native';


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}> child #1 </Text>
            <Text style={styles.textTwoStyle}> child #2 </Text>
            <Text style={styles.textThirdStyle}> child #3 </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:1,
        borderColor:'black',
        height:200,     
    },
    textOneStyle:{
        borderWidth:1,
        borderColor:'red',
        
    },
    textTwoStyle:{
        borderWidth:1,
        borderColor:'red',
        
    },
    textThirdStyle:{
        borderWidth:1,
        borderColor:'red',
        
    },
})


export default BoxScreen;