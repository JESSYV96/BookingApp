import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';

const DestinationItem = ({ image, title }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <Text style={styles.destinationTitle}>{title}</Text>
        </View>
    )
}

export default DestinationItem
