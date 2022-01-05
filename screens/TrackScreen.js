import React, {useState, useContext} from 'react';
import { View, ImageBackground, StyleSheet, Text, Image, TouchableWithoutFeedback, FlatList } from 'react-native';
import { PlayerContext } from '../contexts/PlayerContext'
import { Images } from '../assets/thumbnails/thumbnails';
import tracklist from "../song data/tracklist.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons'; 


 //saving track elements to starred tracks (Key = "@StarredTracks")
 const saveOrDeleteTrack = async (trackID) => {
    try{
        const retrievedTracksStringified = await AsyncStorage.getItem('@StarredTracks');
        if(retrievedTracksStringified == null){
            await AsyncStorage.setItem('@StarredTracks', JSON.stringify([trackID]));
        } else{
            const tracks = JSON.parse(retrievedTracksStringified);
            if(tracks.includes(trackID)){
                //need to delete
                const trackIndex = tracks.indexOf(trackID);
                tracks.splice(trackIndex, 1);
                console.log(tracks);
            } else {
                tracks.push(trackID);
                console.log(tracks);
            }
            const tracksJSON = JSON.stringify(tracks);
            console.log(tracksJSON);
            await AsyncStorage.setItem('@StarredTracks', tracksJSON);
        }

    } catch(error) {
        const errorMessage = "Failed To Save Track";
        console.log(errorMessage + ":\n" + error.message);
    }
}

function TrackScreen(props) {
    //access to PlayerContext and create a new state with the values. setVidIndex will update the context value as well.
    const [vidIndex, setVidIndex] = useContext(PlayerContext);
    const numTracks = tracklist.length;
    var trackElements = [];

    for (let i = 0; i < numTracks; i++){
        trackElements.push({id: i, title: tracklist[i].name});
    }

    
    //images or elements that will be dynamically added into flatlist
    const renderItem = ({item}) => (
        <View>
            <TouchableWithoutFeedback  onPress={e => {setVidIndex(item.id)}}>
                <Image style={styles.thumbnail} source={Images[item.id]}/>
            </TouchableWithoutFeedback> 
            <AntDesign id={item.id} style={styles.addButton} name="plussquareo" size={24} color="white" onPress={() => saveOrDeleteTrack(item.id)}/>
            <Text style={styles.trackTitle}>{item.title}</Text>
        </View>
    );
   
    return(
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background} 
        >
        <View style= {styles.backgroundView}></View>
        <View style={styles.trackView}>
            <FlatList 
                data ={trackElements}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={3}
            />
            
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    addButton:{
        position: 'absolute',
        top: 15,
        right: 15,
    },
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
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 25,
        fontWeight:'bold',
        color: "white",
        alignSelf: 'center',
    },
    thumbnail:{
        width: 240,
        height: 135,
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
        resizeMode: 'stretch',
        borderRadius: 10,        
    },
    trackTitle:{
        color:"#cfcfd6",
        fontSize: 12,
        alignSelf: "center",
        paddingBottom: 3,
        fontWeight: "bold",
    },
    //setting this trackView with position 'absolute' will cause the flatlist cannot be scrolled
    trackView:{
        flexDirection:'column',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        flexGrow:1,
    },
})

export default TrackScreen;