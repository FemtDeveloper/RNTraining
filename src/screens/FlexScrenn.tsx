import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>caja 1</Text>
      <Text style={styles.caja2}>caja 2</Text>
      <Text style={styles.caja3}>caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  caja1: {
    fontWeight: '700',
    fontSize: 24,
    padding: 5,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-end',
  },
  caja2: {
    borderWidth: 2,
    fontWeight: '700',
    fontSize: 24,
    padding: 5,
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
  caja3: {
    borderWidth: 2,
    fontWeight: '700',
    fontSize: 24,
    padding: 5,
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
});
