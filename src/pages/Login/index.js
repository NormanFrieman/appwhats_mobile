import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import connection from '../../connection'

import style from './style'

export default function Login(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    function register(){
        navigation.navigate('Register')
    }

    async function chatpage(){
        if(username == '' && pass == ''){
            Alert.alert(
                "Erro de login",
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
                const data = {
                    username: username,
                    pass: pass
                }

                await connection.put('/login', data)
                await AsyncStorage.setItem('username', username)

                navigation.navigate('Chatpage')
            }
            catch{
                Alert.alert(
                    "Erro de login",
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
                <Text style={style.txtHeader}>
                    <Feather 
                        name="mail"
                        size={28}
                        color="#000"
                    />
                    &nbsp;
                    Appwhats
                </Text>
                <Text style={style.txtHeader}>Seja bem-vindo</Text>
            </View>
            <View>
                <Text style={style.txtInp}>
                    <Feather 
                        name="user"
                        size={24}
                        color="#000"
                    />
                    &nbsp;
                    Username
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite seu username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={style.txtInp}>
                    <Feather 
                        name="unlock"
                        size={24}
                        color="#000"
                    />
                    &nbsp;
                    Senha
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite sua senha"
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                />
                <TouchableOpacity style={style.btnInp}>
                    <Text 
                        style={style.txtBtn}
                        onPress={() => chatpage()}
                    >
                        Fazer Login
                    </Text>
                </TouchableOpacity>
                <Text style={style.txtCommands}>Esqueceu sua senha?</Text>
                <Text
                    style={style.txtCommands}
                    onPress={() => register()}
                >
                    Não possui conta? Criar uma conta
                </Text>
            </View>
        </View>
    )
}