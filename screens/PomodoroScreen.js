import React from 'react';
import { View, ImageBackground, StyleSheet, Text, Platform, TextInput, Button} from 'react-native';
import PomodoroTimer from '../components/pomodoro/PomodoroTimer'

function PomodoroScreen(props) {
    return(
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background} 
        >
        <View style={styles.backgroundView}>
            {/* <Text style= {styles.text}>Pomodoro Screen</Text> */}
            <PomodoroTimer style={styles.timer}/>
        </View>
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    backgroundView:{
        position: 'absolute',
        backgroundColor: "rgba(0,0,0,0.8)",
        width: "100%",
        height: "100%"
    },
    text:{
        // fontSize: 40,
        // paddingTop: 30,
        // paddingLeft: 30,
        // color: "white"
    },

    fixHorizontally:{
    //   paddingTop:100,
    //   paddingLeft:100,
    //   paddingRight:100,
    //   flexDirection:'row',
    //   justifyContent:'space-between'
    },

    timer:{
        // flex: 1
    }

})

export default PomodoroScreen;