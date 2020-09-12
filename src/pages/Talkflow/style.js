import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 56,
        backgroundColor: '#222',
    },
    txtHeader: {
        marginHorizontal: 20,
        color: '#fff',
        fontSize: 24,
    },
    messages: {
        flexDirection: 'column',
    },
    contact: {
        flexDirection: 'row',
    },
    settingContact:{
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#bbb',
    },
    messageContact: {
        fontSize: 16,
    },
    msgDataContact: {
        color: '#888',
        fontSize: 10,
        textAlign: 'right',
        marginTop: 6,
    },
    user: {
        flexDirection: 'row-reverse',
    },
    settingUser:{
        paddingHorizontal: 12,
        paddingVertical: 12,
        marginHorizontal: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#000',
    },
    messageUser: {
        fontSize: 16,
        color: '#fff'
    },
    msgDataUser: {
        color: '#aaa',
        fontSize: 10,
        textAlign: 'right',
        marginTop: 6,
    },
    divInput: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 50,
        width: 240,
    },
    inputBtn: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})