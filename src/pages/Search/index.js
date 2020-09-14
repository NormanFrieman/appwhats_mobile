import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import connection from '../../connection'

import style from './style'

export default function Search(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [founds, setFounds] = useState([])

    function chatpage(Search){
        navigation.navigate('Chatpage', Search)
    }

    async function searching(){
        if(search == ''){
            Alert.alert(
                "Erro na pesquisa",
                "Há campos sem preencher",
                [
                    {
                        text: "OK",
                    }
                ],
                {cancelable: false}
            )
        }else{
            try{
                const listUsers = await connection.get(`/searchUsers/${search}`)
                setFounds(listUsers.data)
                console.log(listUsers.data)
            }
            catch{
                Alert.alert(
                    "Erro na pesquisa",
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
    }

    async function addContact(found){
        if(await AsyncStorage.getItem('username') == found){
            Alert.alert(
                "Erro ao adicionar o contato",
                "Você não pode adicionar você mesmo",
                [
                    {
                        text: "OK",
                    }
                ],
                {cancelable: false}
            )
        }else{
            try{
                const data = {
                    username: await AsyncStorage.getItem('username'),
                    contact: found
                }
                await connection.put('/addContact', data)
                
                Alert.alert(
                    "Sucesso!",
                    "Contato adicionado com sucesso!",
                    [
                        {
                            text: "OK",
                        }
                    ],
                    {cancelable: false}
                )
            }
            catch{
                Alert.alert(
                    "Erro ao adicionar o contato",
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
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
                <TouchableOpacity onPress={() => searching()}>
                    <Feather
                        style={style.txtHeader}
                        name="search"
                        
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={founds}
                keyExtractor={found => found}
                renderItem={({item: found}) => (
                    <View style={style.contact}>
                        <Text style={style.username}>{found}</Text>
                        <Feather
                            style={style.action}
                            name="user-plus"
                            color="#fff"
                            onPress={() => addContact(found)}
                        />
                    </View>
                )}
            />
        </View>
    )
}