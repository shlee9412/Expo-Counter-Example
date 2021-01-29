import React from 'react';
import { View } from 'react-native';
import Num from '../components/ReduxStateCounter/Num';
import Buttons from '../components/ReduxStateCounter/Buttons';

const ReduxStateCounter = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Num/>
      <Buttons/>
    </View>
  );
};

export default ReduxStateCounter;