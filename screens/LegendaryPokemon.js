import {View, Text, ScrollView, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
import pokemons from '../data/legendaryPokemons';
import { colors } from '../assets/styles.common';

const LegendaryPokemon = () => {
  return (
    <ScrollView
      horizontal={true}
      decelerationRate="fast"
      snapToInterval={windowWidth}
      style={{ backgroundColor: colors.white }}
      scrollEventThrottle={16}>
        {
          pokemons.map((pokemon, index) => {
            return (
              <ScrollView style={styles.mainWrapper} key={index}>
                <Image source={pokemon.image} style={styles.pokemonImage} />
                <Text style={styles.title}>{pokemon.name}</Text>
                <Text>{pokemon.bio}</Text>
              </ScrollView>
            );
          })
        }
      
    </ScrollView>
  );
};

export default LegendaryPokemon;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    width: windowWidth,
    padding: 15,
  },
  pokemonImage: {
    height: 400,
    width: windowWidth - 30,
    resizeMode: 'contain'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});
