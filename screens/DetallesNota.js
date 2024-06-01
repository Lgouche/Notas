// DetallesNota.js
import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import appFirebase from '../configuracion';
import { getFirestore, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const db = getFirestore(appFirebase);

export default function DetallesNota({ route, navigation }) {
    const { id, titulo, descripcion } = route.params;
    const [newTitulo, setNewTitulo] = useState(titulo);
    const [newDescripcion, setNewDescripcion] = useState(descripcion);

    const handleEliminar = async () => {
        try {
            await deleteDoc(doc(db, 'notas', id));
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error al eliminar la nota:', error);
        }
    };

    const handleEditar = async () => {
        try {
            await updateDoc(doc(db, 'notas', id), {
                titulo: newTitulo,
                descripcion: newDescripcion
            });
            Alert.alert('Éxito', 'Nota actualizada correctamente');
        } catch (error) {
            console.error('Error al editar la nota:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={newTitulo}
                onChangeText={setNewTitulo}
            />
            <TextInput
                style={[styles.input, styles.detalleInput]}
                value={newDescripcion}
                onChangeText={setNewDescripcion}
                multiline
            />
            <TouchableOpacity style={styles.btnEliminar} onPress={handleEliminar}>
                <Text style={styles.textBtnEliminar}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEditar} onPress={handleEditar}>
                <Text style={styles.textBtnEditar}>Editar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    detalleInput: {
        height: 120,
        textAlignVertical: 'top',
    },
    btnEliminar: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
    },
    textBtnEliminar: {
        color: 'white',
        fontWeight: 'bold',
    },
    btnEditar: {
        backgroundColor: 'blue',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    textBtnEditar: {
        color: 'white',
        fontWeight: 'bold',
    },
});
