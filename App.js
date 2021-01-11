import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { Feather, Entypo } from '@expo/vector-icons';
import { COLORS } from './constants/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from "./screens/OnBoarding";
import DestinationDetail from "./screens/DestinationDetail";
import TabNavigator from './navigation/TabNavigator';

export default function App() {
    const Stack = createStackNavigator();

    const [loaded, error] = Font.useFonts({
        Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const headerOptions = {
        title: null,
        headerStyle: {
            backgroundColor: COLORS.white,
            shadowColor: 'transparent'
        },
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        ...headerOptions, headerRight: () => (
                            <Pressable
                                style={styles.menu}
                                onPress={() => console.log('menu press')}>
                                <Feather name="menu" size={30} color="black" />
                            </Pressable>
                        )
                    }} />
                <Stack.Screen
                    name="Home"
                    component={TabNavigator}
                    options={{
                        ...headerOptions, headerRight: () => (
                            <Pressable
                                style={styles.menu}
                                onPress={() => console.log('menu press')}>
                                <Entypo name="dots-three-vertical" size={22} color="black" />
                            </Pressable>
                        )
                    }} />
                <Stack.Screen
                    name="DestinationDetail"
                    component={DestinationDetail}
                    options={{
                        headerShown: false,
                        title: null,
                        headerStyle: {
                            backgroundColor: null,
                            shadowColor: 'transparent'
                        },
                        headerRight: () => (
                            <Pressable
                                style={styles.menu}
                                onPress={() => console.log('menu press')}>
                                <Entypo name="dots-three-vertical" size={22} color="black" />
                            </Pressable>
                        )
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        fontFamily: 'Roboto',
        margin: 10
    },
    menu: {
        paddingHorizontal: 30,
        marginBottom: 20
    }
});
