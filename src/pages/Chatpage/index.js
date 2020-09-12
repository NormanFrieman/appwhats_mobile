import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

import profile from '../../../assets/profile.png'

export default function Chatpage(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()

    function search(){
        navigation.navigate('Search')
    }

    function talkflow(){
        navigation.navigate('Talkflow')
    }

    function openOptions(){

    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txtHeader}>Chatpage</Text>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => search()}>
                        <Feather
                            style={style.txtHeader}
                            name="search"
                            color="#fff"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openOptions()}>
                        <Feather
                            style={style.txtHeader}
                            name="more-vertical"
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity style={style.contact} onPress={() => talkflow()}>
                    <Image style={style.img} source={profile} />
                    <View style={style.info}>
                        <Text style={style.username}>NormanFrieman</Text>
                        <Text style={style.msg}>Hello World</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={style.contact} onPress={() => talkflow()}>
                    <Image style={style.img} source={profile} />
                    <View style={style.info}>
                        <Text style={style.username}>NormanFrieman</Text>
                        <Text style={style.msg}>Hello World</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}