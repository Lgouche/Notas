// Home.js
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useCallback } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import appFirebase from '../configuracion';
import { getFirestore } from 'firebase/firestore';
import { ListItem } from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect

const db = getFirestore(appFirebase);

export default function Home({ navigation }) {
  const [notas, setNotas] = useState([]);

  // Función para cargar las notas desde Firestore
  const cargarNotas = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'notas'));
      const nuevasNotas = [];
      querySnapshot.forEach((doc) => {
        nuevasNotas.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setNotas(nuevasNotas);
    } catch (error) {
      console.error('Error al cargar las notas:', error);
    }
  };

  // useFocusEffect se asegura de que la función cargarNotas se ejecute
  // cada vez que la pantalla "Home" esté enfocada (visible)
  useFocusEffect(
    useCallback(() => {
      cargarNotas();
    }, [])
  );

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={styles.cardContainer}
      onPress={() => navigation.navigate('Detalles', { id: item.id, titulo: item.titulo, descripcion: item.descripcion })}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.titulo}>{item.titulo}</ListItem.Title>
        <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('Nueva Nota')}>
        <Text style={styles.textBoton}>Agregar una nota</Text>
      </TouchableOpacity>
      <FlatList
        data={notas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boton: {
    backgroundColor: '#7EDB5E',
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  textBoton: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardContainer: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titulo: {
    fontWeight: 'bold'
  },
});
