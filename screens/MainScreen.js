import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

function MainScreen(props) {
 
    return (
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background}          
        >
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    audioplayer:{
        position:'absolute',
        bottom: '10px',
    },
    background:{
        flex: 1
    }

})

export default MainScreen;