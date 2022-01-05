import React, {useState, useCallback, useRef, useContext} from "react";
import Slider from "@react-native-community/slider";
import {Text, Button, StyleSheet, View, SafeAreaView, Container} from 'react-native';
import { PlayerContext } from "../../contexts/PlayerContext.js";
import tracklist from "../../song data/tracklist.js";
import YoutubeWrapper from "./YoutubeWrapper";// youtube iframe

//icons
import { Ionicons } from '@expo/vector-icons';
const AudioPlayer = ({
  
}) => {
  //pulls from PlayContext state of vidIndex 
  const [vidIndex, setVidIndex] = useContext(PlayerContext);
  
  //for play/pause
  const [playing, setPlaying] = useState(false);

  //for volume
  const [volume, setVolume] = useState(100);

  //current song
  let video = tracklist[vidIndex];
  //current song id
  const videoId = video.id;
  const videoName = video.name;
  //mute 
  const [mute, setMute] = useState(false);
  //Event for when user clicks on previous button. Changes the value of index to current index - 1, which updates the current video to the one prior in tracklist.
  const prevSong = useCallback(() => {
    if(vidIndex > 0){
      setVidIndex((prev) => prev-1);
    }
  }, [vidIndex, setVidIndex]);

  //Event for when user clicks on next button. Changes the value of index to current index + 1, which updates the current video to the one after in tracklist.
  const nextSong = useCallback(() => {
    if(vidIndex < tracklist.length-1){
      setVidIndex((prev) => prev + 1)
    }
  }, [vidIndex, setVidIndex]);

  //Event for when user clicks on pause/play button. Changes the value of playing to true/false 
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  
  //play the next song when ended
  const onStateChange = useCallback((state) => {
    if (state === "ended"){
      setVidIndex((prev) => prev+1);
      setPlaying(true);
    }
  }, []);

  const toggleMute = useCallback(() => {
    setMute((prev) => !prev);
  }, []);
 
  return (
    <SafeAreaView style={style.container}>
      <View >
        <YoutubeWrapper 
          className = {style.invisView}
          play = {playing}
          videoId = {videoId}
          onStateChange = {onStateChange}
          togglePlaying = {togglePlaying}
          volume = {volume}
          mute = {mute}
        />
      </View>
      

      <View style={style.buttonWrapper}>
      <Ionicons style={style.icons} name={"musical-notes"} size = {32} color="#E1C16E"/>

        <Ionicons style = {style.icons} name="play-back" size={32} color="white" onPress={prevSong}/>
        <Ionicons style = {style.icons} name={playing ? "pause" : "play"} size={32} color="white" onPress={togglePlaying}/>
        <Ionicons style = {style.icons} name="play-forward" size={32} color="white" onPress={nextSong}/>
        <Ionicons style = {style.icons} name={mute ? "volume-mute": "volume-high"} size={32} color="white" onPress={toggleMute}/>
        <Text style= {style.songName}>{videoName}</Text>
        <View style={style.volumeSlider}/>
      </View>
    </SafeAreaView>
  
  );
};

const style = StyleSheet.create({
  container : {
    height: 80,
    width:'100%',
  },
  invisView : {
    display: 'none',
  },
  
  playPause : {
    flex: 0.5,
  },
  buttonWrapper : {
    backgroundColor: "#000014",
    flexDirection: "row",
    
    padding: 23,
    
  },
  icons : {
    paddingLeft: 5,
  },
  volumeSlider : {
    width: 100,
    height: 34,
  },
  songName : {
    backgroundColor: "#000014",
    color: 'white',
    fontSize:20,
  }
})

export default AudioPlayer;