import React, { useState } from 'react';
// Importa React y el hook `useState`, que permite manejar el estado en componentes funcionales.

import { View, TextInput, Button, StyleSheet } from 'react-native';
// Importa componentes de React Native: 
// - `View`: un contenedor para otros componentes.
// - `TextInput`: un campo de entrada de texto.
// - `Button`: un botón interactivo.
// - `StyleSheet`: para definir estilos.

export default function AddTaskScreen({ route, navigation }) { 
  // Define el componente funcional `AddTaskScreen`, que recibe `route` y `navigation` como propiedades:
  // - `route` contiene información y parámetros enviados desde la pantalla anterior.
  // - `navigation` permite navegar entre pantallas.

  const [task, setTask] = useState(''); 
  // Declara el estado `task` para almacenar el texto de la tarea ingresada. 
  // `setTask` es la función que actualiza este estado.

  const { setTasks } = route.params; 
  // Extrae `setTasks` de los parámetros recibidos en `route`.
  // `setTasks` es una función para actualizar la lista de tareas en la pantalla anterior.

  const addTask = () => { 
    // Define una función para añadir la tarea ingresada a la lista de tareas.

    setTasks(prevTasks => [...prevTasks, { text: task, completed: false }]);
    // Actualiza la lista de tareas usando la función `setTasks`.
    // Se añade un nuevo objeto tarea con el texto ingresado (`task`) y una propiedad `completed` inicializada como `false`.

    setTask(''); 
    // Limpia el campo de entrada de texto al restablecer el estado `task` a una cadena vacía.

    navigation.goBack(); 
    // Navega de vuelta a la pantalla anterior después de añadir la tarea.
  };

  return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          placeholderTextColor="gray"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      width: '80%',
      color: 'white',
    },
  });