import React from 'react';
import Navigator from './routes/drawer.js';
import AudioPlayer from './components/section/AudioPlayer'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PlayerContextProvider } from './contexts/PlayerContext.js';
import { AmbientContextProvider } from './contexts/AmbientContext.js';
import AmbientPlayer from './components/section/AmbientPlayer.js';
import { View, StatusBar } from 'react-native';

//must wrap PlayerContextProvider over all the children components
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#61dafb" />
      <PlayerContextProvider>
          <Navigator/>
          <View style={{flexDirection: 'row'}}>
            <AudioPlayer/>
          </View>
      </PlayerContextProvider>
    </SafeAreaProvider>
  );
};
