import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface FabProps {
  title: string;
  position?: 'bottomLeft' | 'bottomRight';
  onPress: () => void;
}

const Fab = ({onPress, title, position = 'bottomRight'}: FabProps) => {
  const android = () => {
    return (
      <View
        style={[
          styles.FabLocation,
          position === 'bottomRight' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('cyan', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={[
          styles.FabLocation,
          position === 'bottomRight' ? styles.right : styles.left,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return Platform.OS === 'android' ? android() : ios();
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 40,
    padding: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    alignSelf: 'center',
  },
  FabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
});

export default Fab;
