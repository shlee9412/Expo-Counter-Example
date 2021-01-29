import React from 'react';
import { Text, View } from 'react-native';

const Num = ({ num }) => {
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