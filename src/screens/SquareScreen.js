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

    //community convention :::
    //action === {type:'change_red' || 'change_green' || 'change_blue', payload:15}

    switch(action.colorToChange){ 
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state:{...state,red:state.red + action.amount}
                 
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state :{...state,green:state.green + action.amount}
        case 'blue':
           return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state:{...state,blue:state.blue + action.amount}
        default:
            return state;

            
    }

};


const SquareScreen = () => {
    //dispatch === basically run my reducer
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});
    const {red,green,blue} = state;
    return (
        <View>
            <ColorCounter 
            onIncrease={() =>dispatch({colorToChange:'red',amount:COLOR_INCREMENT})} 
            onDecrease={() => dispatch({colorToChange:'red',amount:-1*COLOR_INCREMENT}) } 
            color="Red"/>

            <ColorCounter 
            onIncrease={() =>  dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})} 
            onDecrease={() =>  dispatch({colorToChange:'blue',amount:-1*COLOR_INCREMENT})} 
            color="Blue"/>

            <ColorCounter 
            onIncrease={() => dispatch({colorToChange:'green',amount:COLOR_INCREMENT}) } 
            onDecrease={() => dispatch({colorToChange:'green',amount:-1*COLOR_INCREMENT}) } 
            color="Green"/>

            <View style={{height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}


const styles = StyleSheet.create({

})



export default SquareScreen;