import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/index'

export default StyleSheet.create({
    destinationContainer: {
        position: 'absolute',
        bottom: '-50%',
        right: '5%',
        left: '5%',
        height: 150,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20, 
        padding: 20     
    },
    innerContainer: {
        flexDirection: 'row',
    },
    imageContainer: {
       marginBottom: 10,
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 15,
    },
    destinationInfo: {
        marginLeft: 10,
    },
    titleInfo: {
        fontSize: SIZES.body3,
        fontWeight: '700'
    },
    countryInfo: {
        color: COLORS.gray
    },
    textCard: {
        color: COLORS.gray,
        lineHeight: 24,
        fontWeight: '500',
        fontSize: SIZES.body3 - 1
    }
})