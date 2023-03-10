import React from 'react';
import {SafeAreaView} from 'react-native';
// import {Text, View} from 'react-native';
// import HolaMundoScreen from './src/screens/HolaMundo';
// import CounterScreen from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {FlexScreen} from './src/screens/FlexScrenn';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};
