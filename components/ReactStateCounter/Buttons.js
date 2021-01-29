import React from 'react';
import { Button, View } from 'react-native';

const Buttons = ({ num, setNum }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 70,
        marginTop: 20
      }}
    >
      <View style={{ width: 30 }}>
        <Button title='+' onPress={() => setNum(num + 1)}/>
      </View>

      <View style={{ width: 30 }}>
        <Button title='-' onPress={() => setNum(num - 1)}/>
      </View>
    </View>
  );
};

export default Buttons;