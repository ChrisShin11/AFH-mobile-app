import React from "react";
import sounds from "../song data/sounds"
import { View, Text, Image, ImageBackground, StyleSheet, Button} from 'react-native';
import AmbientPlayer from "../components/section/AmbientPlayer";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { Images } from '../assets/sounds-images/sound_images';
import Slider from "@react-native-community/slider";
import Bird from "../assets/sounds/Birds.mp3"
function SoundsScreen(props) {

  const playSound = (name) => {
    let audio = document.getElementById(name);
    const img = document.querySelector(`.${name}-image`);
    const slider = document.querySelector(`.${name}-slider`);
  

    if (audio.paused) {
      audio.play();
      img.style.opacity = 1;
      slider.style.opacity = 1;
      setBgGif(`../assets/sounds-images/${name}.gif`);
    } else {
      audio.pause();
      img.style.opacity = 0.35;
      slider.style.opacity = 0;
      //set bg back to original
    }
  };

  const playButton = (data) => {
    data.forEach((name) => {
      //var audio = document.getElementById(name);
      const img = document.querySelector(`.${name}-image`);
      const slider = document.querySelector(`.${name}-slider`);

      if (audio.paused) {
        audio.play();
        img.style.opacity = 1;
        slider.style.opacity = 1;

        setBgGif(`../assets/sounds-images/${name}.gif`);
      } else {
        audio.pause();
       
        img.style.opacity = 0.35;
        slider.style.opacity = 0;
        //set bg back to original
      }
    });
  };

  return (
    <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background} 
        >
    <View>
      
      {/* <View style={styles.settings}>
        <TouchableWithoutFeedback
          onClick= {() => playButton(["Cafe", "Library", "Windchime"])}
        >
            <ImageBackground style = {styles.settingicons} source={require("../assets/sounds-images/focus.png")} alt=""/>
            <Text style = {styles.settingfont}>{"Focus"} </Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          
          onClick={() => playButton(["Birds", "Wind", "Farm"])}
        >
            <ImageBackground style = {styles.settingicons} source={require("../assets/sounds-images/relax.png")} alt=""/>
            <Text style = {styles.settingfont}>{"Relax"}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          
          onClick={() => playButton(["Leaves", "Train", "Library"])}
        >
            <ImageBackground style = {styles.settingicons} source={require("../assets/sounds-images/sleep.png")} alt=""  />
            <Text style = {styles.settingfont}>{"Sleep"}</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
         
          onClick={() => playButton(["cafe", "library", "windchime"])} //set to right playButtons
        >
            <ImageBackground style = {styles.settingicons} source={require("../assets/sounds-images/meditate.png")} alt=""  />
            <Text style = {styles.settingfont}>{"Meditate"}</Text>
        </TouchableWithoutFeedback>
        
        <TouchableWithoutFeedback
         
        >
          <View >
            <ImageBackground style = {styles.settingicons} source={require("../assets/sounds-images/focus.png")} alt="" />
            <Text  style = {styles.settingfont}>{"Stop"}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View> */}

      <View style={styles.soundboard} >
        {sounds.map((sound) => (
          <View 
            data-sound={sound.name}
            key={sound.id}
           
          >
            <AmbientPlayer
              source = {sound.sourceLink}
              volume = {100}
              imgsrc = {sound.source}
              name = {sound.name}
              />
           {/*
            <ImageBackground
              source={sound.source}
              onClick={() => playSound(sound.name)}
              style={styles.gifs}              
              alt={sound.name}
              title={sound.name}
            />
            <Text style={styles.font} >
              {sound.name}
            </Text>
            <View >
            <Slider style = {styles.volumeSlider} 
            minimumTrackTintColor={'white'} 
            thumbTintColor={'white'} 
            maximumTrackTintColor={'#E1E1E1'} 
            minimumValue={0} 
            maximumValue = {100}
            value = {100} 
            //onValueChange={(e, volume) => {}} 
            />
             
            </View>
           */}
        </View>
        ))}
      </View>
    </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  backgroundView:{
    position: 'absolute',
    backgroundColor: "black",
    opacity: 0.8,
    width: "100%",
    height: "100%"
},
settingicons: {
  width: 50,
  height: 50,
  marginRight: 60,
},
gifs: {
  width: 120,
  height: 80,
  marginLeft: 20,
},
settings: {
  height: "20%",
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center'
},
settingfont:{
  marginLeft: 15,
  fontWeight: 'bold',
  color: 'white'
},
font:{
  marginLeft: 20,
  fontWeight: 'bold',
  color: 'white'
},
soundboard: {
  paddingTop: 10,
  paddingLeft: 20,
  height: "100%",
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'

},

volumeSlider : {
  width: 140,
  height: 20,
  marginBottom:20,

},
})

export default SoundsScreen;

