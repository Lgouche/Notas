import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import NuevaNota from './screens/NuevaNota';
import DetallaesNota from './screens/DetallaesNota';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'INICIO',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#5EDB99' },
            headerTintColor: '#000000',

          }} />
        <Stack.Screen name="Nueva Nota"
          component={NuevaNota}
          options={{
            title: 'Nueva Nota',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#5EDB99' },
            headerTintColor: '#000000',

          }} />
        <Stack.Screen name="Detalles"
          component={DetallaesNota}
          options={{
            title: 'Detalles',
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#5EDB99' },
            headerTintColor: '#000000',

          }} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
