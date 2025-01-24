import React from 'react';
// Importa React para poder usar componentes funcionales.

import AppNavigator from './navigation';
// Importa el componente `AppNavigator` desde el archivo `./navigation`. 
// Este componente maneja la navegación entre las pantallas de la aplicación.

export default function App() {
  // Define el componente principal `App`, que es el punto de entrada de la aplicación.

  return <AppNavigator />;
  // Renderiza el componente `AppNavigator`, que contiene toda la lógica y estructura de navegación.
}
