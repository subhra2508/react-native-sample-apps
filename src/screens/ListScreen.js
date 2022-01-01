import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const ListScreen = () => {
    const friends = [
        {name:'Friend #1'},
        {name:'Friend #2'},
        {name:'Friend #3'},
        {name:'Friend #4'},
        {name:'Friend #5'},
        {name:'Friend #6'},
        {name:'Friend #7'},
        {name:'Friend #8'},
        {name:'Friend #9'},
    ]
    // return <Text>List Screen</Text>
    return (
    <FlatList 
    // horizontal={true}
    // showsHorizontalScrollIndicator={false}
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({item}) =>{
        //ele === {item:{name:friend #1},index:0}
        return (
            <Text style={styles.textStyle}>{item.name}</Text>
        )
    } }
    />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50,
        backgroundColor:'#FF9800'
    }
})

export default ListScreen;