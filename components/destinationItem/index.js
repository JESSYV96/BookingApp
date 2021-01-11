import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles';

const DestinationItem = ({ image, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <Text style={styles.destinationTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DestinationItem
