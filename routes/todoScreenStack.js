import {createStackNavigator} from 'react-navigation-stack';

import todoScreen from '../screens/TodoScreen';
import Header from '../components/header';
import React from 'react';
//if we use stack navigator, it will also include a header

const screens = {

    //what screen to show
    //the first screen object will be the first screen that the app will show (order matters!)
    Todo :{
        screen: todoScreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle:  () => <Header navigation={navigation} title='To-do List'/>
            }
        }
    }
}

const TodoScreenStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: '#000014', height: 70}
    }
})

export default TodoScreenStack;