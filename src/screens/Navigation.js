import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/Header';
import Login from './LoginScreen';
import BioMatrixTest from './BioMatrixTest';
import MainScreen from './MainScreen';
import TaxiMap from './Map';
import Verify from './Verify';
import Phone from './Phone';
import CustomComponent from '../components/customComponent';
import BioMatrix from './BioMatrix';
import Splash from './Splash';
import Ride from './Ride';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: props => <Header {...props} />,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="biometrixTest" component={BioMatrixTest} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="taxiMap" component={TaxiMap} />
        <Stack.Screen name="verify" component={Verify} />
        <Stack.Screen name="phone" component={Phone} />
        <Stack.Screen name="bioMatrix" component={BioMatrix} />
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="ride" component={Ride} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreens;
