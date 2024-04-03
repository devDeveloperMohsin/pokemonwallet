import React from 'react';
import {CubeTransparentIcon, HomeIcon, MapIcon} from 'react-native-heroicons/outline';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pokedex from '../screens/Pokedex';
import LegendaryPokemon from '../screens/LegendaryPokemon';
import Regions from '../screens/Regions';
import {colors} from '../assets/styles.common';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarActiveBackgroundColor: colors.red,
          tabBarIcon: ({color}) => {
            return <HomeIcon color={color} />;
          },
        }}
        name="Pokedex"
        component={Pokedex}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarActiveBackgroundColor: colors.red,
          tabBarIcon: ({color}) => {
            return <CubeTransparentIcon color={color} />;
          },
        }}
        name="Legendary"
        component={LegendaryPokemon}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.white,
          tabBarActiveBackgroundColor: colors.red,
          tabBarIcon: ({color}) => {
            return <MapIcon color={color} />;
          },
        }}
        name="Regions"
        component={Regions}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
