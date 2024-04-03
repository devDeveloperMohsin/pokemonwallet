import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import PokemonType from '../components/PokemonType';
import {colors} from '../assets/styles.common';

import ImageColors from 'react-native-image-colors';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutPokemon from './AboutPokemon';
import PokemonMoves from './PokemonMoves';
import PokemonEvolve from './PokemonEvolve';

const Tab = createMaterialTopTabNavigator();

const PokemonDetails = () => {
  const [headerBackground, setHeaderBackground] = useState(colors.white);
  const uri = require('../assets/images/bulbasaur.png');

  const fetchImageColors = async imageUri => {
    let result = await ImageColors.getColors(imageUri, {
      fallback: '#228B22',
      cache: true,
      key: 'unique_key',
    });

    setHeaderBackground(result.dominant);
  };

  useEffect(() => {
    fetchImageColors(uri);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Pokemon Header */}
      <View
        style={{...styles.headerContainer, backgroundColor: headerBackground}}>
        <View style={styles.headerPokemonWrapper}>
          <Image
            source={require('../assets/images/bulbasaur.png')}
            style={styles.headerPokemon}
          />
        </View>
        <View>
          <Text style={styles.headerPokemonName}>Bulbasaur</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <PokemonType pokemontype="grass" />
            <PokemonType pokemontype="normal" />
          </View>
        </View>
      </View>
      {/* End Pokemon Header */}

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle:{
            backgroundColor: headerBackground
          },
          tabBarStyle: {
            elevation:10,
          },
          tabBarPressColor: headerBackground
        }}>
        <Tab.Screen name="About" component={AboutPokemon} />
        <Tab.Screen name="Moves" component={PokemonMoves} />
        <Tab.Screen name="Evolve" component={PokemonEvolve} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerPokemonWrapper: {
    marginRight: 15,
  },
  headerPokemon: {
    height: 120,
    width: 120,
    resizeMode: 'contain',
  },
  headerPokemonName: {
    fontWeight: 'bold',
    fontSize: 23,
    color: colors.white,
  },
});