import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

export default function Login(){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })
    const navigation = useNavigation()

    function register(){
        navigation.navigate('Register')
    }

    function chatpage(){
        navigation.navigate('Chatpage')
/*        Alert.alert(
            "Erro de login",
            "Falhou ai",
            [
                {
                    text: "OK",
                }
            ],
            {cancelable: false}
        )*/
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
                    Username
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite seu username"
                />
                <Text style={style.txtInp}>
                    <Feather 
                        name="unlock"
                        size={24}
                        color="#000"
                    />
                    Senha
                </Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite sua senha"
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