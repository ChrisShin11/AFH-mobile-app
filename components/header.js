import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Dimensions } from "react-native";


export default function Header ({navigation, title}){

    //function to open the app drawer once the menu icon is pressed
    const openMenu = () => {
        navigation.openDrawer();
    }

    /**
     * allow the icon on the center header to change dynamically depending on which page does the user visit
     */
    if (title == 'Home'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name='ios-home-sharp' size={30} style={styles.screenIcon}/>
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title =='Tracks'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-musical-note" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title == 'Sound Collections'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-folder" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title == 'Pomodoro Timer'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-alarm-sharp" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title == 'To-do List'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-checkbox" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title == 'Self Care Kits'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-desktop" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>Kind Anime for Unkind Days</Text>
                </View>
            </View>
        );
    }
    if (title == 'Starred Tracks'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                    <Ionicons name="ios-star" size={30} style={styles.screenIcon} />
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    if (title =='FAQ'){
        return(
            <View style= {styles.header}>
                <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>               
                <View style={styles.headerTitle}>
                <Ionicons name="ios-help-circle" size={30} style={styles.screenIcon}/>
                    <Text style= {styles.headerText}>{title}</Text>
                </View>
            </View>
        );
    }
    return(
        
        <View style= {styles.header}>
            <Ionicons name='ios-menu-sharp' size={30} onPress={openMenu} style={styles.menuIcon}/>
            <View>
                <Text style= {styles.headerText}>{title}</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    header:{
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignSelf: "stretch",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#000014',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        letterSpacing: 1
    },
    headerTitle:{
        flexDirection:'row'
    },
    menuIcon:{
        position: "absolute",
        color:'#FFFFFF',
        left: 20,
        top: 5,
    },
    screenIcon:{
        marginRight: 10,
        color:'#FFFFFF'
    }
    


});