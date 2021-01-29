import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import ReactStateCouter from './pages/ReactStateCouter';
import ReduxStateCounter from './pages/ReduxStateCounter';

const store = createStore(rootReducer);
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode='screen'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='React State Counter' component={ReactStateCouter}/>
          <Stack.Screen name='Redux State Counter' component={ReduxStateCounter}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;