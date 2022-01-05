import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, ImageBackground, Image} from 'react-native';
import {Audio} from 'expo-av'
import Slider from "@react-native-community/slider";
import { TouchableOpacity } from "react-native-gesture-handler";

const AmbientPlayer = ({
  source,
  imgsrc,
  name
}) => {
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);
  const [opacity, setOpacity] = useState(0.5);
  
  async function playSound() {
    if(playing){
      setPlaying(false);
      setOpacity(1)

    }else{
      setPlaying(true);
      setOpacity(0.5)
    }

    const { sound } = await Audio.Sound.createAsync(
      source,
      initialStatus = {},
      onPlaybackStatusUpdate = null,
      downloadedFirst = true
    );
    setSound(sound);
    if(playing){
      await sound.playAsync();
      sound.setIsLoopingAsync(true)

    }else{
      await sound.pauseAsync();
    }
  }
  useEffect(() => {
    return sound 
    ? () => {
      sound.unloadAsync(); }
    : undefined;
  },[sound]);
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={playSound}>
            <Image
              source={imgsrc}
              style={styles.gifs}              
              alt={name}
              title={name}
              opacity={opacity}
            />
            </TouchableOpacity>
            <Text style={styles.font} >
              {name}
            </Text>
            <View >
              {/*
            <Slider style = {styles.volumeSlider} 
            minimumTrackTintColor={'white'} 
            thumbTintColor={'white'} 
            maximumTrackTintColor={'#E1E1E1'} 
            minimumValue={0} 
            maximumValue = {100}
            value = {100} 
            //onValueChange={(e, volume) => {}} 
              />*/}
            </View>
    </View>
  );
  }

  export default AmbientPlayer;

  const styles = StyleSheet.create({
    container: {
      width: 200,
      height: 150,
      marginRight: 10,
      marginTop: 10,
      alignItems: "center"

    },
    volumeSlider : {
      width: 140,
      height: 20,
      marginBottom:20,
    
    },
    font:{
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      color: 'white'
    },
    gifs: {
      width: 150,
      height: 100,
      borderRadius: 50,
      
    },
  })
