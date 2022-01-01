import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title = "Forest" imageSource = {require("../../assets/forest.jpg")} imageScore = {9}/>
            <ImageDetail title="Beach" imageSource = {require("../../assets/beach.jpg")} imageScore = {3}/>
            <ImageDetail title="Moutain" imageSource = {require("../../assets/mountain.jpg")} imageScore = {5}/>
        </View>
    )
};


const styles = StyleSheet.create({

});

export default ImageScreen;