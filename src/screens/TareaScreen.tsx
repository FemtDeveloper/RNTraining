import React from 'react';
import {View, StyleSheet} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaAzul} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaCyan} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajaAzul: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 3,
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 3,
    top: 50,
  },
  cajaCyan: {
    backgroundColor: 'cyan',
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 3,
  },
});
