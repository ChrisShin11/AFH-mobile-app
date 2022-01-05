import React, {useState, useCallback, useRef} from "react";

// youtube iframe
import {Button, Platform, StyleSheet, View} from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';

const YoutubeWrapper = ({
  play,
  videoId,
  onStateChange,
  togglePlaying,
  mute,
  volume,
}) => {
  
  return (
      <YouTubePlayer
      webViewStyle={{opacity:0.99}}
      webViewProps={{renderToHardwareTextureAndroid: true,}}
      webViewProps={{androidLayerType:
        Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'nonde'}}
      play={play}
      videoId={videoId}
      onStateChange={onStateChange}
      volume = {volume}
      mute = {mute}
      />
      
  
  );
};

export default YoutubeWrapper;
