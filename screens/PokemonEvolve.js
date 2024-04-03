import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../assets/styles.common';

const PokemonEvolve = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{paddingHorizontal: 15,}}>
        <View style={styles.pokemonEvolveGrid}>
          <View>
            <Image source={require('../assets/images/treecko.png')} />
            <Text style={styles.pokemonName}>Treecko</Text>
          </View>

          <Image
            source={require('../assets/images/arrow-red.png')}
            style={styles.arrow}
          />

          <View>
            <Image source={require('../assets/images/grovyle.png')} />
            <Text style={styles.pokemonName}>grovyle</Text>
          </View>
        </View>

        <View style={{height: 1, backgroundColor: colors.gray}}></View>

        <View style={styles.pokemonEvolveGrid}>
          <View>
            <Image source={require('../assets/images/grovyle.png')} />
            <Text style={styles.pokemonName}>grovyle</Text>
          </View>

          <Image
            source={require('../assets/images/arrow-red.png')}
            style={styles.arrow}
          />

          <View>
            <Image source={require('../assets/images/sceptile.png')} />
            <Text style={styles.pokemonName}>sceptile</Text>
          </View>
        </View>

        <Image style={styles.pokeball} source={require('../assets/images/pokeball.png')} />
      </View>
    </ScrollView>
  );
};

export default PokemonEvolve;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  pokemonEvolveGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  pokemonName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 18,
    textTransform: 'capitalize',
    color: colors.gray,
  },
  arrow: {
    height: 30,
    width: 50,
    opacity: 0.5,
  },
  pokeball: {
    position: 'absolute',
    bottom: -100,
    right: 0,
    zIndex: -1,
    opacity: 0.1
  }
});
