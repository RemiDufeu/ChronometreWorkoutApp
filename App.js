import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppContextManagement from './Context/AppContextManagement'

import Chrono from "./Component/Chrono"
import Home from "./Component/Home"

const Stack = createStackNavigator();


function App() {

  return (
    <AppContextManagement value={{
      minutes : 1,
      secondes : 30
    }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Chrono" component={Chrono} options={{ title: 'Chronomètre' }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </AppContextManagement>
  );
}



export default App;