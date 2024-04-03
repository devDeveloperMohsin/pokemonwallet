import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import { colors } from '../assets/styles.common';
import { useNavigation } from '@react-navigation/native';

const PokemonListItem = ({name}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.pokeCard} onPress={() => navigation.navigate('PokemonDetails')}>
      <View style={ styles.pokemonNameContainer }>
        <Text style={styles.pokemonName}>Pikachu</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../assets/images/pokeball-gray.png')}
            style={{height: 15, width: 15, marginRight: 15,}}
          />
          <Text>#001</Text>
        </View>
      </View>
      <Image
        source={require('../assets/images/pikachu.png')}
        style={{height: 80, width: 80}}
      />
    </TouchableOpacity>
  );
};

export default PokemonListItem;


const styles = StyleSheet.create({
  pokeCard: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 7,
  },
  pokemonNameContainer: {
    flex: 1
  },
  pokemonName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  }
});

