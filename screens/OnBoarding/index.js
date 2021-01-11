import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { images } from '../../constants/index'


const index = () => {
    const navigation = useNavigation();

    const goToHomeScreen = () => navigation.navigate('Home')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    source={images.onboardingImage}
                    style={styles.img} />
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Digital Ticket</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Etiam id dictum enim, at varius purus.
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goToHomeScreen}>
                    <LinearGradient
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Start !</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default index
