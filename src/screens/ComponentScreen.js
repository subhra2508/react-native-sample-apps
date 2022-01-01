import React from 'react';
import {Text,StyleSheet,View} from 'react-native';


const ComponentScreen = () => {

    const greeting = 'halo';


    return (
        <View>
        <Text style={styles.textStyle}>This is component Screen</Text>
        <Text>Hi/{greeting} subhrajyoti !!!</Text>
    </View>
    )
    
    
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
})


export default ComponentScreen;