import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Login from './pages/Login'
import Register from './pages/Register'
import Chatpage from './pages/Chatpage'
import Search from './pages/Search'
import Talkflow from './pages/Talkflow'

const AppStack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="Register" component={Register}/>
                <AppStack.Screen name="Chatpage" component={Chatpage}/>
                <AppStack.Screen name="Search" component={Search}/>
                <AppStack.Screen name="Talkflow" component={Talkflow}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}