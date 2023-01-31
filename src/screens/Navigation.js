import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../App';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: props => <Header {...props} />}}>
        <Stack.Screen name="Home" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
