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
    },
    txtHeader: {
        marginHorizontal: 20,
        color: '#000',
        fontSize: 24,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 20,
    },
    username: {
        fontSize: 22,
    },
    action: {
        color: '#080',
        fontSize: 24,
    }
})