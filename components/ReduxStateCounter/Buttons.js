import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setNum } from '../../modules/Counter';

const Buttons = () => {
  const num = useSelector(state => state.counter.num);
  const dispatch = useDispatch();

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
        <Button title='+' onPress={() => dispatch(setNum(num + 1))}/>
      </View>

      <View style={{ width: 30 }}>
        <Button title='-' onPress={() => dispatch(setNum(num - 1))}/>
      </View>
    </View>
  );
};

export default Buttons;