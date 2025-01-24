import React from 'react'; 
import HomeScreen from '../../screens/HomeScreen'; 
import AddTaskScreen from '../../screens/AddTaskScreen'; 

import { createStackNavigator } from '@react-navigation/stack'; 
// Importa la función `createStackNavigator` desde la biblioteca `@react-navigation/stack` para crear un navegador basado en pilas (stack).

const Stack = createStackNavigator(); 
// Crea una instancia del Stack Navigator, que administra la navegación entre las pantallas.

export default function AppNavigator() { 
  // Define el componente funcional `AppNavigator` que será el encargado de configurar y renderizar las pantallas.

  return (
    <Stack.Navigator> 
      {/* Renderiza el Stack Navigator, que contiene la configuración de las pantallas de la aplicación. */}
      
      <Stack.Screen name="Home" component={HomeScreen} /> 
      {/* Configura una pantalla en el navegador con el nombre "Home" y el componente asociado `HomeScreen`. */}
      
      <Stack.Screen name="AddTask" component={AddTaskScreen} /> 
      {/* Configura otra pantalla en el navegador con el nombre "AddTask" y el componente asociado `AddTaskScreen`. */}
    </Stack.Navigator>
  );
}
