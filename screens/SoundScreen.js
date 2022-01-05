import React, { useState, useCallback, useContext } from 'react';
import { View, ImageBackground, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import soundlist from "../song data/soundlist";
import AmbientPlayer from "../components/section/AmbientPlayer";
import { AmbientContext } from '../contexts/AmbientContext';

const imageWidth = 180;
const imageHeight = 100;

function SoundScreen( props){
  const [sound, setSound] = useContext(AmbientContext);
  const [song1, setSong1] = useState(false);

  const disabled = true;
  const playSound = () => {
    if (song1){
      
    }
  }
  const chooseSound = (itemName) => {
    if(itemName == 'Birds'){
      setSong1((prev) => !prev);
    }else if (itemName == 'Cafe'){
      setSong2((prev) => !prev);
    }else if (itemName == 'Campfire') {
      setSong3((prev) => !prev);
    }
    playSound();
  }
    


  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() =>console.log(item.name) && setSound(item.index)}>
      <ImageBackground source={item.image}
      
      style={styles.image}>
        <View style={styles.shadow}>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
  return (
    <ImageBackground 
      source={require("../assets/lofi-1.gif")}
      style= {styles.background} 
    >
      <SafeAreaView
        style={styles.container}>
          <FlatList style = {styles.list}
            data={soundlist}
            renderItem={renderItem}
            keyExtractor={(item)=>item.index}
            numColumns = {5}
          />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {flex:1, padding: 25},
    background: {flex:1, opacity:0.9},
    text: {color: 'white', paddingLeft: 5, fontSize: 20, fontWeight: "bold"},
    image: {width: imageWidth, height: imageHeight, borderRadius: 15, overflow: 'hidden', marginVertical: 12, marginHorizontal: 6},
    shadow: {backgroundColor: 'rgba(0,0,0,0.3)', padding:10, width: imageWidth, height: imageHeight, borderRadius: 15},
    list: {width: '100%', height: '100%', padding:5}
})

export default SoundScreen;