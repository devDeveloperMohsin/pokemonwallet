import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/styles.common';

const PokemonMoves = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ].map((item,index) => (
          <View style={styles.moveContainer} key={index}>
            <Text>Ember</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default PokemonMoves;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: colors.white,
  },
  moveContainer: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 25,
    elevation: 2,
  },
});
