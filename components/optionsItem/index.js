import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'


const OptionItem = ({ icon, label, bgColor }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <LinearGradient
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.iconContainer}>
                    {icon}
                </LinearGradient>
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>

    )
}

export default OptionItem