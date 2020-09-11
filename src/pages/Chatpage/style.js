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
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    }
})