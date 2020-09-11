import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: -20,
        marginBottom: 40,
    },
    txtHeader: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 12,
    },
    txtInp:{
        fontSize: 24,
        marginBottom: -4,
    },
    input: {
        fontSize: 24,
        height: 52,
        marginBottom: 16,
    },
    btnInp: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        height: 50,
        width: Constants.width,
        backgroundColor: '#000',
        borderRadius: 8,
    },
    txtBtn: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    txtCommands: {
        marginTop: 12,
        color: '#7b7b7b',
        fontSize: 16,
    }
})