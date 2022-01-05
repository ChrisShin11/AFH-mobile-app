import React, {useState, useContext} from 'react';
import { View, ImageBackground, StyleSheet, Text, Button, Image, TouchableWithoutFeedback, FlatList } from 'react-native';
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
        const errorMessage = "Failed To Save or Delete Track";
        console.log(errorMessage + ":\n" + error.message);
    }
}


function StarredTrackScreen(props) {
    //access to PlayerContext and create a new state with the values. setVidIndex will update the context value as well.
    const [vidIndex, setVidIndex] = useContext(PlayerContext);
    //var trackElements = [{id: 0, title: "Lofi Hip Hop Radio Deep Focus/Study Beats"}];
    //var trackElements = [];    
    const [trackElements, setTracks] = useState([]);
    React.useEffect(() => {
        
        const fetchStarredTracks = async () => {
            try{
                const starredTracksStringify = await AsyncStorage.getItem('@StarredTracks');
                if(starredTracksStringify != null){
                    const starredTracks = JSON.parse(starredTracksStringify);
                    const newTracks = []
                    for(let i = 0; i < starredTracks.length; i++){
                        newTracks.push({id: starredTracks[i], title: tracklist[starredTracks[i]].name});
                    }
                    setTracks(newTracks);
                    
                }
            } catch (error) {
                const errorMessage = "Failed to retrieve tracks";
                console.log(errorMessage + ":\n" + error.message);
            }
        };
        fetchStarredTracks();
    }, [trackElements]);
    
    
    const renderItem = ({item}) => (
        <View>
            <TouchableWithoutFeedback  onPress={e => {setVidIndex(item.id)}}>
                <Image style={styles.thumbnail} source={Images[item.id]}/>
            </TouchableWithoutFeedback> 
            <AntDesign id={item.id} style={styles.minusButton} name="minussquareo" size={24} color="white" onPress={() => saveOrDeleteTrack(item.id)}/>
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
                numColumns={4}
            />
            
        </View>
        </ImageBackground>
    );
    
}

const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    backgroundView:{
        flex:1,
        backgroundColor: "rgba(0,0,0,0.8)",

    },
    minusButton:{
        position: 'absolute',
        top: 10,
        right: 10,
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
        marginVertical: 5,
        marginHorizontal: 4,
        resizeMode: 'stretch',
        borderRadius: 10        
    },
    trackTitle:{
        color:"white",
        fontSize: 11,
        alignSelf: "center",
        paddingBottom: 3,
    },
    trackView:{
        position: "absolute",
        flexDirection:'column',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
    },
})

export default StarredTrackScreen;