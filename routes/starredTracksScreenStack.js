import {createStackNavigator} from 'react-navigation-stack';

//import MainScreen from '../screens/MainScreen';
import Header from '../components/header';
import React from 'react';

import StarredTrackScreen from '../screens/StarredTrackScreen';
//if we use stack navigator, it will also include a header

const screens = {

    //what screen to show
    //the first screen object will be the first screen that the app will show (order matters!)
    StarredTracks :{
        screen: StarredTrackScreen, //TODO: change this to redirect to the correct screen
        navigationOptions: ({navigation}) => {
            return {
                headerTitle:  () => <Header navigation={navigation} title='Starred Tracks'/>
            }
        }
    }
}

const StarredTracksScreenStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: '#000014', height: 70}
    }
})

export default StarredTracksScreenStack;