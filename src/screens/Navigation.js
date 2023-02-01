import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header';
import Login from './LoginScreen';
import BioMatrixTest from './BioMatrixTest';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: props => <Header {...props} />}}
        initialRouteName={'login'}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="biometrixTest" component={BioMatrixTest} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
