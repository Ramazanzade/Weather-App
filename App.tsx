import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tabbar from './src/navigation/tabbar/Tabbar';
import HomeScreen from './src/navigation/stack/HomeStack/HomeScreen';
const Stack = createNativeStackNavigator();
//ba run edirəm
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Tabbar" component={Tabbar} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;