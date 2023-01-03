import React from 'react';
import {
  View,
  StyleSheet,
  // Dimensions,
  Text,
  useWindowDimensions,
} from 'react-native';

export const DimensionesScreen = () => {
  // const {width, height} = Dimensions.get('window');

  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaMorada} />
      </View>
      <Text style={styles.title}>
        W: {Math.round(width)}, H: {Math.round(height)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: '80%',
    backgroundColor: 'green',
    // position: 'relative',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    position: 'absolute',
    height: '50%',
    right: 50,
    bottom: 0,
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    // position: 'relative',
    // position: 'absolute',
    zIndex: 100,
    right: 0,
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
});
