import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

export default function Search(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()

    function chatpage(Search){
        navigation.navigate('Chatpage', Search)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => chatpage(Search)}>
                    <Feather
                        style={style.txtHeader}
                        name="arrow-left"
                    />
                </TouchableOpacity>
                <TextInput
                    style={style.txtHeader}
                    placeholder="Pesquisar"
                />
                <Feather
                    style={style.txtHeader}
                    name="search"
                />
            </View>
            <ScrollView>
                <View style={style.contact}>
                    <Text style={style.username}>NormanFrieman</Text>
                    <Feather
                        style={style.action}
                        name="user-plus"
                        color="#fff"
                    />
                </View>
            </ScrollView>
        </View>
    )
}