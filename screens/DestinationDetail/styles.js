import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants/index'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: '100%',
        resizeMode: 'cover'
    },
    iconContainer: {
        flex: 2,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textIcon: {
        marginVertical: 15,
        fontWeight: '500'
    },
    description: {
        marginHorizontal: 25
    },
    titleDescription: {
        fontWeight: '600',
        marginBottom: 10,
        fontSize: SIZES.body3 + 1,
    },
    textDescription: {
        color: COLORS.gray,
        fontSize: SIZES.body3,
        lineHeight: 30,
    },
    bookingContainer: {
        flex: 1.5,
        marginHorizontal: 25,
        justifyContent: "center"
    },
    booking: { 
        height: 80,
        flexDirection: "row",
        backgroundColor: 'lightblue',
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    button: {
        height: 60,
        width: 150,
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
        fontSize: SIZES.h2 - 2,
        fontFamily: 'RobotoBlack',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
    price: {
        fontSize: SIZES.h1, 
        padding: 10,
        fontFamily: 'Roboto'
    }
})

