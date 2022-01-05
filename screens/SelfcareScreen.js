import React, {useState, useContext, useEffect, Component} from 'react';
import { View, ImageBackground, StyleSheet, Text, Image, ScrollView, Modal, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import { images } from "../selfcareKitData/selfcareList.js";
import { MaterialIcons } from '@expo/vector-icons';
import db from '../db/firestore';
import axios from "axios";
// import { FlatList } from 'react-native-gesture-handler';


function SelfcareScreen(props) {



    const [emailModalOpen, setEmailModalOpen] = useState(false)
    const [fileSentModalOpen, setFileSentModalOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [filename, setfilename] = useState('')
    const [filelink, setfilelink] = useState('')
    const [sendingMessage, setSendingMessage] = useState('')

    const handleSubmitEmail = (email, filename, filelink) => {
        
        // this is for development purpose
        
        // this is the server url that runs the express
        // if the server is running locally url : "http://{ip address}:{port}/send"
        // example "http://123.456.7.89:5000/send"
        const local_host_url = ""
        axios.post(local_host_url, {
            email: email,
            filelink: filelink
        }).then((res) => {
            console.log(res)
            setSendingMessage("Email Successfully Sent")
            console.log(sendingMessage)
            setEmailModalOpen(false);
            setFileSentModalOpen(true);
        }).catch((error) => {
            console.log("jh", error)
            setSendingMessage("Sending Failure")
            console.log(sendingMessage)
            setEmailModalOpen(false);
            setFileSentModalOpen(true);
        })

        db.collection('userEmail').add({
            emailAddress: email,
            filename: filename,
            filelink: filelink,
            dateSent: new Date(),
        })
      }

    return (
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background}          
        >   
        <View style={styles.container}>  
            <View style={{flex: 1,  justifyContent: 'center'}}>
                <View style={styles.card}> 
                    <View style={styles.cardContent}>
                        <Text style= {styles.titleText}>What is the Anime Self Care?{"\n"}</Text>
                        <Text style={styles.contentText}>The Anime Self Care Kit was designed to be a tool to help you along your self care journey. We hope that you will find this Anime Self Care kit helpful and that you take this chance to use your love of anime to express yourself, or just be creative. This is your safe space. Fill it with whatever makes your feel. Fill it with funny moments that you want to remember. Fill it motivational quotes to keep you going. Fill it with the amazing looking food that you drool over the screen for. Fill it with you</Text> 
                    </View>
                </View>
            </View>
            <View style={{flex: 2, alignItems: 'center', marginTop: 25}}> 
                <FlatList 
                    keyExtractor={(item) => item.id}
                    data = {images}
                    numColumns={2}
                    key={2}
                    renderItem={({ item }) => (                          
                        <View style={styles.imageRow}>
                            <Image style={styles.image} source={item.filepath}/>
                            <MaterialIcons 
                                name='file-download'
                                size={24}
                                style={{textAlign: "right", color: 'white'}}
                                onPress={() => { setfilelink(item.fileLink); setfilename(item.fileName); setEmailModalOpen(true); }}
                                />
                        </View>
                    )}
                />
            </View>
            <Modal transparent visible={emailModalOpen} animationType='slide'>             
                <View style={styles.modalBackground}>
                    <View style={styles.emailModalContent}>
                        <MaterialIcons 
                            name='close'
                                size={30}
                                style={{textAlign: 'right'}}
                                onPress={() => {setSendingMessage(''), setfilelink(''); setEmail(''); setfilename(''); setEmailModalOpen(false); }}
                        />  
                        <Text style={styles.emailInputTitle}>Enter Email Address</Text>
                        <TextInput placeholder='e.g. abc123@gmail.com' style={styles.emailInput} onChangeText={(val) => setEmail(val)}/>
                        <TouchableOpacity onPress={()=> handleSubmitEmail(email, filename, filelink)}>
                            <View style={styles.emailSubmitButton}>
                                <Text style={styles.emailSubmitButtonText}> Submit </Text>
                            </View>   
                        </TouchableOpacity>
                    </View>
                </View>  
            </Modal>
            <Modal transparent visible={fileSentModalOpen} animationType='slide'>             
                <View style={styles.modalBackground}>
                    <View style={styles.fileSentModalContent}>
                        <MaterialIcons 
                            name='close'
                                size={30}
                                style={{textAlign: 'right'}}
                                onPress={() => {setSendingMessage(''), setfilelink(''); setEmail(''); setfilename(''); setFileSentModalOpen(false); }}
                        />  
                        <Text style={{textAlign: 'center', fontSize:20}}>{sendingMessage}</Text>
                    </View>
                </View>  
            </Modal>  
        </View> 

        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    emailSubmitButton:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71'
    },
    emailSubmitButtonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    emailInputTitle:{
        textAlign: 'center',
        fontSize: 22,
        fontWeight:'bold',
        marginBottom: 5,
    },
    emailInput:{
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 40,
    },
    modalBackground:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fileSentModalContent:{
        width: '30%',
        minHeight: '15%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
    },
    emailModalContent:{
        width: '40%',
        minHeight: '40%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
    },
    image:{
        width: 270,
        height: 210,
        marginVertical: 5,
        marginHorizontal: 4,
        resizeMode: 'stretch',
        borderRadius: 30        
    },
    imageRow:{
        marginVertical: 7,
        marginHorizontal: 20,
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#00000090',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.3,
        shadowRadius:2,
        marginHorizontal: 4,
        marginVertical: 6,
        height: '70%',
        width: '80%'
    },
    cardContent: {
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 5
    },
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.8)",
      },
    audioplayer:{
        position:'absolute',
        bottom: '10px',
    },
    background:{
        flex: 1
    },
    titleText:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        fontWeight:'bold',
        color: "white",
        marginBottom: 5,
        textAlign: 'center'
    },
    contentText:{
        textAlign: 'justify',
        color:"white",
        fontSize: 15,
    }

})

export default SelfcareScreen;