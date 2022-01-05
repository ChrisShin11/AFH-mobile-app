import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#00000090',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal: 20,
        marginVertical: 6,
        minWidth: '95%',
        maxWidth: '95%',
        justifyContent: 'center',
    },
    cardContent: {
        marginHorizontal: 15,
        marginVertical: 5
    }
})