import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useFonts, Inter_500Medium} from '@expo-google-fonts/inter'
import AsyncStorage from '@react-native-community/async-storage'

import style from './style'

export default function Register({navigation}){
    let [fontsLoaded] = useFonts({
        Inter_500Medium
    })

    function login(){
        navigation.navigate('Login', Register)
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.txtHeader}>Criar conta</Text>
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
                    placeholder="Digite o username"
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
                    placeholder="Digite a senha"
                />
                <TouchableOpacity style={style.btnInp}>
                    <Text style={style.txtBtn}>Criar conta</Text>
                </TouchableOpacity>
                <Text style={style.txtCommands}>Esqueceu sua senha?</Text>
                <Text
                    style={style.txtCommands}
                    onPress={() => login(Register)}
                >
                    Já possui conta? Fazer login
                </Text>
            </View>
        </View>
    )
}