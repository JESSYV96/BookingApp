import React from 'react'
import styles from './styles'
import { Text, View, Image, FlatList } from 'react-native'
import { Ionicons, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { COLORS, images } from '../../constants/index'
import OptionItem from '../../components/optionsItem'
import DestinationItem from '../../components/destinationItem'
import destinationData from '../../data/destinations'

const optionsData = [
    {
        id: '1',
        label: 'Flight',
        bgColors: ['#46aeff', '#5884ff'],
        icon: <Ionicons name="airplane" size={30} color={COLORS.white} />
    },
    {
        id: '2',
        label: 'Train',
        bgColors: ['#fddf90', '#fcda13'],
        icon: <MaterialIcons name="train" size={35} color={COLORS.white} />
    },
    {
        id: '3',
        label: 'Bus',
        bgColors: ['#e973ad', '#da5df2'],
        icon: <FontAwesome5 name="bus" size={28} color={COLORS.white} />
    },
    {
        id: '4',
        label: 'Taxi',
        bgColors: ['#fcaba8', '#fe6bba'],
        icon: <FontAwesome5 name="taxi" size={28} color={COLORS.white} />
    },
    {
        id: '5',
        label: 'Hotel',
        bgColors: ['#ffc465', '#ff9c5f'],
        icon: <Ionicons name="bed-sharp" size={30} color={COLORS.white} />
    },
    {
        id: '6',
        label: 'Eats',
        bgColors: ['#7cf1fb', '#4ebefd'],
        icon: <MaterialCommunityIcons name="silverware-fork-knife" size={30} color={COLORS.white} />
    },
    {
        id: '7',
        label: 'Adventure',
        bgColors: ['#7be993', '#46caaf'],
        icon: <Ionicons name="ios-compass" size={30} color={COLORS.white} />
    },
    {
        id: '8',
        label: 'Event',
        bgColors: ['#fca397', '#fc7b6c'],
        icon: <MaterialCommunityIcons name="party-popper" size={30} color={COLORS.white} />
    },
]


const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={images.homeBanner}
                    style={styles.image} />
            </View>
            <View style={styles.categoryContainer}>
                <FlatList
                    scrollEnabled={false}
                    numColumns={4}
                    data={optionsData}
                    renderItem={itemData => (
                        <OptionItem
                            key={itemData.item.id}
                            icon={itemData.item.icon}
                            bgColor={itemData.item.bgColors}
                            label={itemData.item.label} />
                    )}
                />
            </View>
            <View style={styles.destinationContainer}>
                <Text style={styles.title}>Destination</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinationData}
                    renderItem={itemData => (
                        <DestinationItem
                            onPress={() => navigation.navigate('DestinationDetail', { destinationId: itemData.item.id })}
                            key={itemData.item.id}
                            title={itemData.item.title}
                            image={itemData.item.image} />
                    )}
                />
            </View>
        </View>
    )
}

export default Home
