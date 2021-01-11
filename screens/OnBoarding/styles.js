import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants/index'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    innerContainer: {
        marginVertical: 15,
        paddingHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 300,
        resizeMode: 'contain'
    },
    title: {
        fontSize: SIZES.h1 - 4,
        marginVertical: 20,
        fontFamily: 'RobotoBlack'
    },
    description: {
        fontSize: SIZES.body3,
        fontFamily: 'Roboto',
        textAlign: 'center',
        lineHeight: 25,
        marginTop: 15,
        marginBottom: 80,
        color: COLORS.gray
    },
    button: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: SIZES.h3,
        fontFamily: 'RobotoBlack',
        letterSpacing: 0.5,
    }
})
