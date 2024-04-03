import React, {useEffect, useState} from 'react';


import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


import WelcomeScreen from './screens/WelcomeScreen';
import BottomTabs from './components/BottomTabs';
import PokemonDetails from './screens/PokemonDetails';


const Stack = createNativeStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
    .then(value => {
      if(value == null){
        AsyncStorage.setItem('alreadyLaunched', "true").then(res => console.log(res)).catch(e => console.log(e));
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    }).catch(e => console.log(e));
  },[]);

  if(isFirstLaunch === null){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? 'WelcomeScreen' : 'BottomTabs'}>
        <Stack.Screen options={{ headerShown: false }} name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
