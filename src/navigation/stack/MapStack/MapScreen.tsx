import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from '../../../Component/Map/Map';
const Stack = createNativeStackNavigator();
const MapScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    )
}

export default MapScreen