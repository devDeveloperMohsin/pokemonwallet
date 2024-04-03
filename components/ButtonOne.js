import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../assets/styles.common';

const ButtonOne = ({text, marginVertical, backgroundColor, onPress}) => {
  marginVertical = marginVertical ? marginVertical : 0;
  backgroundColor = backgroundColor ? backgroundColor : colors.red;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, marginVertical, backgroundColor}}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOne;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
  },
});
