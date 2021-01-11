import React from 'react'
import styles from './styles';
import stylesCard from './stylesCard';
import { Text, View, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import destinations from '../../data/destinations'
import { COLORS } from '../../constants/index'
import Rating from '../../components/rating';


const DestinationCard = ({ image, title }) => {
    return (
        <View style={stylesCard.destinationContainer}>
            <View style={stylesCard.innerContainer}>
                <View style={stylesCard.imageContainer}>
                    <Image
                        source={image}
                        style={stylesCard.image} />
                </View>
                <View style={stylesCard.destinationInfo}>
                    <Text style={{ marginVertical: 2, ...stylesCard.titleInfo }}>{title}</Text>
                    <Text style={{ marginVertical: 2, ...stylesCard.countryInfo }}>France</Text>
                    <Rating rate={4.5} />
                </View>
            </View>

            <View>
                <Text style={stylesCard.textCard}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et tristique purus.
                </Text>
            </View>
        </View>
    )
}

const DestinationDetail = () => {
    const route = useRoute();
    const destination = destinations.find(destination => destination.id === route.params.destinationId)
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <Image
                    style={styles.image}
                    source={destination.image} />
                <DestinationCard
                    title={destination.title}
                    image={destination.image} />
            </View>
            <View style={styles.iconContainer}>
                <View style={styles.icon}>
                    <FontAwesome5 name="home" size={45} color={COLORS.primary} />
                    <Text style={styles.textIcon}>Villa</Text>
                </View>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name="parking" size={45} color={COLORS.primary} />
                    <Text style={styles.textIcon}>Parking</Text>
                </View>
                <View style={styles.icon}>
                    <FontAwesome5 name="temperature-low" size={45} color={COLORS.primary} />
                    <Text style={styles.textIcon}>4°C</Text>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={styles.titleDescription}>About</Text>
                <Text style={styles.textDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec et tristique purus. In tempus quam in venenatis efficitur.
                    Quisque et dolor ultricies, convallis neque a, blandit sem.
                    Proin rutrum iaculis quam.
                    Vestibulum vitae iaculis diam. Maecenas elementum tincidunt risus in.
                </Text>
            </View>
            <View style={styles.bookingContainer}>
                <View style={styles.booking}>
                    <Text style={styles.price}>100 €</Text>
                    <LinearGradient
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.button}>

                        <Text style={styles.buttonText}>Booking</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default DestinationDetail