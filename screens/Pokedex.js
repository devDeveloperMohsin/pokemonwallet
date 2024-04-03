import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {SearchIcon, FilterIcon} from 'react-native-heroicons/outline';
import {colors} from '../assets/styles.common';
import PokemonListItem from '../components/PokemonListItem';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const fetchPokemons = async() => {
    let pokeResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setNextPageUrl(pokeResponse.data.next);

    pokeResponse.data.results.forEach((poke,index) => {
      axios.get(poke.url)
      .then((pokeDetails) => {
        let newList = pokemons;
        newList.push(pokeDetails.data);
        setPokemons(newList);
        console.log(pokemons);
      });
    });
  }
  useEffect(() => {
    fetchPokemons();
  },[]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchInputContainer}>
          <SearchIcon style={styles.searchInputIcon} color={colors.gray} />
          <TextInput placeholder="Enter something" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <FilterIcon color={colors.gray} />
        </TouchableOpacity>
      </View>
      {/* End Header */}

      {/* Pokemon Listing */}
      <View style={styles.listingContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pokemons.map((poke, index) => (
            <PokemonListItem key={index} pokemon={poke} />
          ))}
        </ScrollView>
      </View>
      {/* End Pokemon Listing */}
    </View>
  );
};

export default Pokedex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  searchInputContainer: {
    position: 'relative',
    backgroundColor: colors.lightGray,
    flex: 1,
    marginRight: 15,
    borderRadius: 25,
  },
  searchInputIcon: {
    position: 'absolute',
    top: 12,
    left: 17,
  },
  searchInput: {
    paddingLeft: 55,
    paddingRight: 15,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 3,
  },
});
