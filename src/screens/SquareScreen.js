import React,{useReducer} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

//the first argument is the state 
//second argument -> how we going to change the state object
//action = how we change the state object
const reducer = (state,action) => {
    //state === {red:number,green:number,blue:number}
    //action === {colorToChange:'red' || 'green' || 'blue' , amount 15 || -15}

    switch(action.colorToChange){
        case 'red':
            return {...state,red:state.red + action.amount}
        case 'green':

        case 'blue':

        default:

            
    }

};


const SquareScreen = () => {
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    return (
        <View>
            <ColorCounter 
            onIncrease={() =>  } 
            onDecrease={() =>  } 
            color="Red"/>

            <ColorCounter 
            onIncrease={() =>  } 
            onDecrease={() =>  } 
            color="Blue"/>

            <ColorCounter 
            onIncrease={() =>  } 
            onDecrease={() =>  } 
            color="Green"/>

            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}


const styles = StyleSheet.create({

})



export default SquareScreen;