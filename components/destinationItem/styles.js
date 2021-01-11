import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants/index'

export default StyleSheet.create({
    container: {
        width: 130,
        marginHorizontal: 20
    },
    image: {
        height: '85%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 15
    },
    destinationTitle: {
        paddingTop: 10,
        fontSize: SIZES.h3,
        fontWeight: '600'
    }
})
