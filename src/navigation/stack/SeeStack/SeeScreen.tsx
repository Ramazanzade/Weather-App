import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import See from '../../../Component/See/See';
const Stack = createNativeStackNavigator();
const SeeScreen = () => {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="See" component={See} />
        </Stack.Navigator>
    
  )
}

export default SeeScreen