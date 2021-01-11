import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS } from '../constants/index'
import Home from "../screens/Home"

const Tab = createBottomTabNavigator();
const tabBarOptions = {
    showLabel: false,
    style: {
        height: 90,
    }
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabBarOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.secondary
                    switch (route.name) {
                        case 'Home':
                            return (
                                <Entypo name="home" size={31} color={tintColor} />
                            )
                        case 'Search':
                            return (
                                <FontAwesome name="search" size={30} color={tintColor} />
                            )
                        case 'Bookmark':
                            return (
                                <FontAwesome name="bookmark" size={29} color={tintColor} />
                            )
                        case 'Profile':
                            return (
                                <FontAwesome name="user" size={30} color={tintColor} />
                            )
                    }
                }
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Bookmark" component={Home} />
            <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>
    )
}

export default TabNavigator
