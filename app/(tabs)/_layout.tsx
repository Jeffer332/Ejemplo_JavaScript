import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import AddTaskScreen from '../../screens/AddTaskScreen';

const Tab = createBottomTabNavigator();
// Crea una instancia del Bottom Tab Navigator, que se utiliza para gestionar la navegación entre las pestañas.

export default function TabNavigator() { 
  // Define el componente funcional `TabNavigator`, que configura y renderiza el navegador de pestañas.

  return (
    <Tab.Navigator>
      {/* Renderiza el Bottom Tab Navigator, que organiza las pantallas en forma de pestañas. */}
      
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Define una pestaña llamada "Home" que muestra el componente `HomeScreen` al seleccionarla. */}
      
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      {/* Define otra pestaña llamada "AddTask" que muestra el componente `AddTaskScreen` al seleccionarla. */}
    </Tab.Navigator>
  );
}
