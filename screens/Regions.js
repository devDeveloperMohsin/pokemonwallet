import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/styles.common';
import regions from '../data/regions';

const windowWidth = Dimensions.get('window').width;

const Regions = () => {
  return (
    <ScrollView style={styles.container}>
      {regions.map((region, index) => (
        <View style={styles.regionContainer} key={index}>
          <Image
            key={index}
            style={styles.regionImage}
            source={region.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Regions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  regionContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
    elevation: 4,
    borderRadius: 10,
  },
  regionImage: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
