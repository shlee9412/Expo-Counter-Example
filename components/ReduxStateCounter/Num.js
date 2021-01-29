import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Num = () => {
  const num = useSelector(state => state.counter.num);

  return (
    <View>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold'
        }}
      >
        {num}
      </Text>
    </View>
  );
};

export default Num;