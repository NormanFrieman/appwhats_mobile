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
    contact: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    user: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    username: {
        fontSize: 20,
    }
})