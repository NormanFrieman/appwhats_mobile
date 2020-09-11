import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

export default function Talkflow(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txtHeader}>NormanFrieman</Text>
            </View>
            <ScrollView style={style.messages}>
                <View style={style.contact}>
                    <Text style={style.username}>NormanFrieman</Text>
                </View>
                <View style={style.user}>
                    <Text style={style.username}>NormanFrieman</Text>
                </View>
                <View style={style.contact}>
                    <Text style={style.username}>NormanFrieman</Text>
                </View>
            </ScrollView>
        </View>
    )
}