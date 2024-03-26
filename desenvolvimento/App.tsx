import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function RelogioDePontoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Relogio de Ponto</Text>
    </View>
  );
}

function CatracaScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Catraca</Text>
    </View>
  );
}

function ControleDePontoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Controle de Ponto</Text>
    </View>
  );
}

function EmpresaScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Empresa</Text>
    </View>
  );
}

function ContatoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contato</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Relogio de Ponto" component={RelogioDePontoScreen} />
        <Stack.Screen name="Catraca" component={CatracaScreen} />
        <Stack.Screen name="Controle de Ponto" component={ControleDePontoScreen} />
        <Stack.Screen name="Empresa" component={EmpresaScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

