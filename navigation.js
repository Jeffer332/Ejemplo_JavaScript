import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

const Stack = createStackNavigator();
// Crea una instancia de un "stack navigator" (navegación por pilas), 
// que es un tipo de navegación donde las pantallas se apilan una sobre otra.

export default function AppNavigator() {
  // Define el componente `AppNavigator`, que gestiona las pantallas y navegación de la aplicación.

  return (
    <NavigationContainer>
      {/* `NavigationContainer` es el componente principal que envuelve toda la estructura de navegación. 
          Es necesario para gestionar el estado de navegación de la aplicación. */}
      
      <Stack.Navigator>
        {/* `Stack.Navigator` define las pantallas que se apilarán en la navegación. */}

        <Stack.Screen name="Home" component={HomeScreen} />
        {/* `Stack.Screen` crea una nueva pantalla dentro del stack. 
            - `name`: es el nombre de la pantalla.
            - `component`: es el componente que se renderiza cuando se navega a esta pantalla. */}

        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        {/* Otra pantalla que será parte del stack de navegación. */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
