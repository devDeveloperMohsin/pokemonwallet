import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react';

import types from '../data/pokemonTypes';
import { colors } from '../assets/styles.common';

const PokemonType = ({pokemontype}) => {
  return (
    <View style={{ ...styles.container, backgroundColor: types[pokemontype].iconColor }}>
      <Image source={types[pokemontype].icon} style={styles.icon} />     
      <Text style={styles.text}>{pokemontype}</Text>
    </View>
  )
}

export default PokemonType

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 13,
    paddingVertical: 5,
    flexDirection: 'row',
    borderRadius: 7,
    marginVertical: 3,
    marginRight: 5,
    alignItems: 'center',
  },
  icon: {
    height: 15,
    width: 15,
    marginRight:10,
  },
  text: {
    color: colors.white,
    textTransform: 'capitalize',
    fontSize: 12,
  }
});