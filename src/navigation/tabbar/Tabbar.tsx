import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faHome, faEarthOceania, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import HomeScreen from '../stack/HomeStack/HomeScreen';
import tabbarcss from './tabbarcss';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import MapScreen from '../stack/MapStack/MapScreen';
import SeeScreen from '../stack/SeeStack/SeeScreen';

const Tab = createBottomTabNavigator();

const Tabbar = ({ route }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 70,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          backgroundColor:'#252830',
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: IconDefinition | undefined;
          if (route.name === 'HomeScreen') {
            iconName = faHome;
          } else if (route.name === 'FavoritScreen') {
            iconName = faHeart;
          } else if (route.name === 'BasketScreen') {
            iconName = faBasketShopping;
          } 

          const iconColor = focused ? "#F55901" : "#A3A9BA";
          const icon = iconName || faEarthOceania; 

          return <FontAwesomeIcon icon={icon} style={tabbarcss.tabIcon} size={35} color={iconColor} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
      <Tab.Screen name="SeeScreen" component={SeeScreen} />
    </Tab.Navigator>
  );
}

export default Tabbar;