import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import appFirebase from '../configuracion';

const db = getFirestore(appFirebase);

export default function NuevaNota({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleGuardar = async () => {
    try {
      if (!titulo || !descripcion) {
        Alert.alert('Error', 'Rellena todos los campos');
      } else {
        const nota = {
          titulo,
          descripcion
        }
        await addDoc(collection(db, 'notas'), nota);
        Alert.alert('Éxito', 'Nota guardada correctamente');
        setTitulo('');
        setDescripcion('');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error al guardar la nota:', error);
      Alert.alert('Error', 'Hubo un problema al guardar la nota');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descripción"
        multiline={true}
        numberOfLines={4}
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleGuardar}
      >
        <Text style={styles.addButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
