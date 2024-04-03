import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../assets/styles.common';

const CircleStat = ({stat}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ring}></View>
      <Text style={styles.statValue}>{stat.value}</Text>
      <Text style={styles.statTitle}>{stat.name}</Text>
    </View>
  );
};

export default CircleStat;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  ring: {
    height: 120,
    width: 120,
    borderWidth: 8,
    borderColor: colors.red,
    borderRadius: 200,
    marginVertical: 15,
    opacity: 0.5
  },
  statValue: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: 40,
    left: 0,
    color: colors.gray,
    fontSize: 18,
    width: 70,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  statTitle: {
    backgroundColor: colors.lightGray,
    position: 'absolute',
    bottom: 40,
    right: -25,
    color: colors.gray,
    fontSize: 16,
    width: 70,
    paddingVertical: 5,
    textAlign: 'right',
    textTransform: 'capitalize',
    textAlign: 'center',
    borderRadius: 25,
  },
});
