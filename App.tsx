
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, View, Text} from 'react-native';
import Inicio from './views/Inicio';
import Detalle from './views/Detalle';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= "Inicio"component = {Inicio} />
      <Stack.Screen name= "Detalle"component = {Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default App;
