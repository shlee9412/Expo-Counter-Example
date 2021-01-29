import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button, Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pages = {
  page1: 'React State Counter',
  page2: 'Redux State Counter'
};

const Home = () => {
  const navigation = useNavigation();

  const changePage = useCallback(name => {
    navigation.navigate(name);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: windowWidth / 4, paddingVertical: windowHeight / 4 }}>
      <Button title={pages.page1} onPress={() => changePage(pages.page1)}/>
      <Button title={pages.page2} onPress={() => changePage(pages.page2)}/>
    </View>
  );
};

export default Home;