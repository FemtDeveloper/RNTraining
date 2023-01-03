import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaRoja} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'green', height: 400, width: 300},
  cajaNaranja: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    bottom: 0,
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  cajaRoja: {
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'white',
    // bottom: 0,
    // left: 0,
    // top: 0,
    // right: 0,
    // position: 'absolute',
    ...StyleSheet.absoluteFillObject,
  },
});
