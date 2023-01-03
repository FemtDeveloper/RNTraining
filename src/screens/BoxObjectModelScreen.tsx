import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModelScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    borderWidth: 10,
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
});
