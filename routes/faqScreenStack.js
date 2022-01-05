import {createStackNavigator} from 'react-navigation-stack';

import FaqScreen from '../screens/FaqScreen';
import Header from '../components/header';
import React from 'react';
//if we use stack navigator, it will also include a header

const screens = {

    //what screen to show
    //the first screen object will be the first screen that the app will show (order matters!)
    Faq :{
        screen: FaqScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle:  () => <Header navigation={navigation} title='FAQ'/>
            }
        }
    }
}

const FaqScreenStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: '#000014', height: 70}
    }
})

export default FaqScreenStack;