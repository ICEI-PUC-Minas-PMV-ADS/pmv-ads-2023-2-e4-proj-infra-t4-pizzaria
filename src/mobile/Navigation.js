import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Registro from './src/screens/Registro';
import Login from './src/screens/Login';
import Pedidos from './src/screens/Pedidos';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
