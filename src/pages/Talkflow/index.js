import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

export default function Talkflow(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()
    const [contact, setContact] = useState([])

    useEffect(() => async function(){
        const contact = [`${await AsyncStorage.getItem('contact')}`]
        setContact(contact)
    })

    function chatpage(Talkflow){
        navigation.navigate('Chatpage', Talkflow)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => chatpage(Talkflow)}>
                    <Feather
                        style={style.txtHeader}
                        name="arrow-left"
                    />
                </TouchableOpacity>
                <FlatList
                    data={contact}
                    keyExtractor={cont => cont}
                    renderItem={({item: cont}) => (
                        <Text style={style.txtHeader}>{cont}</Text>
                    )}
                />
            </View>
            <ScrollView style={style.messages}>
                <View style={style.contact}>
                    <View style={style.settingContact}>
                        <Text style={style.messageContact}>Hello World</Text>
                        <Text style={style.msgDataContact}>12/09</Text>
                    </View>
                </View>
                <View style={style.user}>
                    <View style={style.settingUser}>
                        <Text style={style.messageUser}>Hello World</Text>
                        <Text style={style.msgDataUser}>12/09</Text>
                    </View>
                </View>
                <View style={style.contact}>
                    <View style={style.settingContact}>
                        <Text style={style.messageContact}>Hello World</Text>
                        <Text style={style.msgDataContact}>12/09</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={style.divInput}>    
                <TextInput
                    style={style.input}
                    placeholder="Digite uma mensagem"
                />
                <TouchableOpacity style={style.inputBtn}>
                    <Feather
                        style={{
                            fontSize: 22,
                            color: '#fff'
                        }}
                        name="send"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}