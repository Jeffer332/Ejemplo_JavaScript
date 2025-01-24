import React, { useState } from 'react';
// Importa React y el hook `useState` para manejar el estado en componentes funcionales.

import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// Importa componentes de React Native:
// - `View`: contenedor para organizar los elementos visuales.
// - `Text`: para mostrar texto.
// - `Button`: botón interactivo.
// - `FlatList`: para renderizar listas de datos de forma eficiente.
// - `StyleSheet`: para definir estilos.

import Checkbox from 'expo-checkbox';
// Importa el componente `Checkbox` desde la biblioteca Expo, utilizado para crear casillas de verificación.

export default function HomeScreen({ navigation }) { 
  // Define el componente funcional `HomeScreen`, que recibe `navigation` para navegar entre pantallas.

  const [tasks, setTasks] = useState([]);
  // Declara el estado `tasks`, un arreglo que almacena las tareas. 
  // `setTasks` es la función para actualizar esta lista.

  const toggleTaskCompletion = (index) => {
    // Define una función para alternar el estado de completado de una tarea específica.

    const newTasks = [...tasks];
    // Crea una copia del arreglo `tasks` para evitar modificar directamente el estado original.

    newTasks[index].completed = !newTasks[index].completed;
    // Cambia el estado `completed` de la tarea en el índice dado al opuesto.

    setTasks(newTasks);
    // Actualiza el estado `tasks` con la nueva lista modificada.
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Checkbox
              value={item.completed}
              onValueChange={() => toggleTaskCompletion(index)}
              color={item.completed ? '#4630EB' : undefined}
            />
            <Text style={[styles.task, item.completed && styles.completedTask]}>
              {item.text}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask', { setTasks })}
      />
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
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  task: {
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
});