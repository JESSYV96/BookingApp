import { StyleSheet } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../constants/index'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    innerContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 65,
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    label: {
        color: COLORS.gray,
        fontSize: SIZES.body2 - 5,
        fontWeight: '500',
        marginVertical: 9,
        letterSpacing: 0.5
    },
})

export default styles