import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

import profile from '../../../assets/profile.png'

import connection from '../../connection'

export default function Chatpage(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        loadContacts()
    }, [])

    function search(){
        navigation.navigate('Search')
    }

    async function talkflow(contact){
        await AsyncStorage.setItem('contact', contact)
        navigation.navigate('Talkflow')
    }

    async function loadContacts(){
        const username = await AsyncStorage.getItem('username')
        
        try{
            const response = await connection.get(`/listContacts/${username}`)
            setContacts(response.data)
        }
        catch(err){
            Alert.alert(
                "Erro ao carregar os contatos",
                "Falhou ai",
                [
                    {
                        text: "OK",
                    }
                ],
                {cancelable: false}
            )
        }
    }

    async function removeContact(contact){
        const username = await AsyncStorage.getItem('username')
        const data = {
            username: username,
            contact: contact
        }

        try{
            await connection.put('/removeContact', data)

            await loadContacts()
        }
        catch(err){
            Alert.alert(
                "Erro ao apagar o contato",
                "Falhou ai",
                [
                    {
                        text: "OK",
                    }
                ],
                {cancelable: false}
            )
        }
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
            <TouchableOpacity
                onPress={() => loadContacts()}
                style={{flexDirection: 'row', alignItems:'center'}}
            >
                <View style={style.btnUpdate}>
                    <Feather
                        style={style.btnFeather}
                        name="refresh-cw"
                        color="#fff"
                    />
                </View>
                <Text style={{fontSize: 18}}>Atualizar contatos</Text>
            </TouchableOpacity>
            <FlatList
                data={contacts}
                keyExtractor={contact => contact}
                renderItem={({item: contact}) => (
                    <TouchableOpacity
                        onPress={() => talkflow(contact)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 24,
                        }}
                    >
                        <View style={style.contact}>
                            <Image style={style.img} source={profile} />
                            <View style={style.info}>
                                <Text style={style.username}>{contact}</Text>
                                <Text style={style.msg}>online</Text>
                            </View>
                        </View>
                        <Feather
                            onPress={() => removeContact(contact)}
                            style={style.trash}
                            name="trash-2"
                            color="#c00"
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}