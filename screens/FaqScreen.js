import React from 'react';
import { View, ImageBackground, StyleSheet, Text, ScrollView} from 'react-native';
import Card from '../components/card';

function FaqScreen(props) {
    return(
        <ImageBackground 
            source={require("../assets/lofi-1.gif")}
            style= {styles.background} 
        >
            <ScrollView style={styles.viewStyle}>
                <Card >
                    <Text style= {styles.titleText}>What is Anime Self Care?</Text>
                    <Text style={styles.contentText}>AnimeSelfCare.org is your place for calm, focus and productivity using anime. Enjoy some relaxing anime tunes, download your favorite Anime Self Care Kit and create your perfect sound environment.</Text>     
                </Card>

                <Card >
                    <Text style= {styles.titleText}>About Anime for Humanity</Text>
                    <Text style={styles.contentText}>Anime Self Care is a project brought to you by Anime For Humanity a a 501c(3) non-profit charity dedicated to using anime, manga and cosplay as a medium to challenge the stigma surrounding mental health.</Text>
                </Card>

                <Card >
                    <Text style= {styles.titleText}>Do I need a subscription to use the app?</Text>
                    <Text style={styles.contentText}>No. The website is FREE. FOREVER!</Text>
                </Card>

                <Card >
                    <Text style= {styles.titleText}>How do I navigate the app?</Text>
                    <Text style={styles.contentText}>
                        Step 1: {"\t"}Download your favorite Anime Self Care Kit.
                        {"\n"}Step 2: {"\t"}Pick a radio station of your choice.
                        {"\n"}Step 3: {"\t"}Create a unique sound atmosphere to immerse yourself in deep sleep, improve productivity or reduce stress and anxiety. You can layer sounds one after another, or click the recommended mood mix.
                        {"\n"}Step 4: {"\t"}Use the to-do list to keep track of your self care plan. (You can use it for your daily life tasks as well)
                        {"\n"}Step 5: {"\t"}Enjoy and share it with your loved ones!
                    </Text>
                </Card>

                <Card >
                    <Text style= {styles.titleText}>My favourite anime isn't listed in the Self Care Library, where do I submit it?</Text>
                    <Text style={styles.contentText}>Absolutely! We are always looking to improve the website and grow our library of Anime Self Care Kits. Please click on the FEEDBACK icon to share your ideas, feedback and any anime you would like us to create a kit for.</Text>
                </Card>

                <Card >
                    <Text style={ styles.titleText}>How can I get involved?</Text>
                    <Text style={styles.contentText}>Thank you for your interest in supporting Anime For Humanity! We are always looking for artists to help us create more Anime Self Care Kits. If you would like to be involved and raise awareness for mental health through your artwork and anime, please fill up this form. If you are not an artist but want to volunteer with us, please clickhere</Text>
                </Card>

                <Card >
                    <Text style={ styles.titleText}>Credits</Text>
                    <Text style={styles.contentText}>Big shout out to all the artists, developers, therapists and volunteers who made this project possible. We couldn't do it without you!</Text>
                </Card>
            </ScrollView>
        </ImageBackground>
    );
}

//to customize the card component, pls refer to components/card.js
const styles = StyleSheet.create({
    background:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        fontWeight:'bold',
        color: "white",
        marginBottom: 5,
    },
    contentText:{
        color:"white",
        fontSize:18,
        marginTop: 10,
        marginBottom: 10,
    },
    viewStyle:{
        flexGrow: 1,
        width: '70%'
    }
})

export default FaqScreen;