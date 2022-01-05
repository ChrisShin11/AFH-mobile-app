import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import {Ionicons} from '@expo/vector-icons';
import React from 'react';

import PomodoroScreenStack from "./PomodoroScreenStack";
import FaqScreenStack from "./faqScreenStack";
import MainScreenStack from "./mainScreenStack";
import TracksScreenStack from "./tracksScreenStack";
import TodoScreenStack from "./todoScreenStack";
import SelfcareScreenStack from "./selfcareScreenStack";
import SoundCollectionsScreenStack from "./soundCollectionsScreenTracks";
import StarredTracksScreenStack from "./starredTracksScreenStack";

/**
 * we first create the stackNavigator for each page
 * then we wrap those stackNavigator with the drawerNavigator
 * finally we wrap the drawerNavigator with the createAppContainer
 */

const RootDrawerNavigator = createDrawerNavigator({
    //by default it show the home screen first (order of screens matter!)
        Home: {
        screen: MainScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-home-sharp' size={25} color={'#FFFFFF'}/>),
        },
    },
    Tracks:{
        screen: TracksScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-musical-note' size={25} color={'#FFFFFF'}/>),
        },
    },
    "Sound Collection":{
        screen: SoundCollectionsScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-folder' size={25} color={'#FFFFFF'}/>),
        },
    },
    "Pomodoro Timer":{
        screen: PomodoroScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-alarm-sharp' size={25} color={'#FFFFFF'}/>),
        },
    },
    "To-do List":{
        screen: TodoScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-checkbox' size={25} color={'#FFFFFF'}/>),
        },
    },
    "Self Care Kits":{
        screen: SelfcareScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-desktop' size={25} color={'#FFFFFF'}/>),
        },
    },
    "Starred Tracks":{
        screen: StarredTracksScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-star' size={25} color={'#FFFFFF'}/>),
        },
    },
    FAQ: {
        screen: FaqScreenStack,
        navigationOptions:{
            drawerIcon: (<Ionicons name='ios-help-circle' size={25} color={'#FFFFFF'}/>),
        },
    },
}
,
{
    contentOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#707084',
        inactiveTintColor: 'white',
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
          fontSize: 25,
          marginLeft: 10,

        },
      },
    drawerBackgroundColor: "#121232",
    drawerLabelColor: "white",
    hideStatusBar: 'true',
}
      
);


export default createAppContainer(RootDrawerNavigator);