import React,{useState} from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

// const reducer = (state,action) => {
//     //action.payload = 1
//     //return {...state,counter: state.counter + action.payload}
// }

const CounterScreen = () =>{
     const [counter,setCounter] = useState(0);
    //  const [state,dispatch] = useReducer(reducer,{counter:0})
    return (
        <View>
            <Button title="Increase" onPress={()=>{
                 setCounter(counter+1);
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter-1);
            }}/>
             <Text>Current Count :{counter} </Text>
        </View>
    )
   
}
const styles = StyleSheet.create({
    
});

export default CounterScreen;