import {createStackNavigator} from 'react-navigation-stack';

//import MainScreen from '../screens/MainScreen';
import Header from '../components/header';
import React from 'react';

import TrackScreen from '../screens/TrackScreen';
//if we use stack navigator, it will also include a header

const screens = {

    //what screen to show
    //the first screen object will be the first screen that the app will show (order matters!)
    Tracks :{
        screen: TrackScreen, //TODO: change this to redirect to the correct screen
        navigationOptions: ({navigation}) => {
            return {
                headerTitle:  () => <Header navigation={navigation} title='Tracks'/>
            }
        }
    }
}

const TracksScreenStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: "white",
        headerStyle: {backgroundColor: '#000014', height: 70}
    }
})

export default TracksScreenStack;