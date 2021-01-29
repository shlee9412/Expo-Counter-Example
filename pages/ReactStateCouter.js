import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Buttons from '../components/ReactStateCounter/Buttons';
import Num from '../components/ReactStateCounter/Num';

const ReactStateCouter = () => {
  const [num, setNum] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Num num={num}/>
      <Buttons num={num} setNum={setNum}/>
    </View>
  );
};

export default ReactStateCouter;