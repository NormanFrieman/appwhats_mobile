import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#222',
        height: 56,
    },
    txtHeader: {
        marginVertical: 12,
        marginHorizontal: 12,
        color: '#fff',
        fontSize: 28,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    info: {
        marginLeft: 24,
        justifyContent: 'center',
    },
    username: {
        fontSize: 22,
    },
    msg: {
        fontSize: 16,
    },
    trash: {
        fontSize: 24,
    },
    btnUpdate: {
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: "#000",
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnFeather: {
        fontSize: 20,
    }
})