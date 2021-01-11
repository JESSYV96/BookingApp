import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants/index'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    image: {
        borderRadius: 15,
        resizeMode: 'cover'
    },
    categoryContainer: {
        flex: 1,
        alignItems: 'center',
    },
    destinationContainer: {
        flex: 1,  
        padding: 20,
    },
    title: {
        fontSize: SIZES.h2,
        fontWeight: '700',
        marginBottom: 10,
    }
})
