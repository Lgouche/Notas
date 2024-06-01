import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//Elementos que hay que importar antes de por utilizar firebase

export default function NuevaNota(props) {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleGuardar = () => {
        const nota = {
            titulo: titulo,
            descripcion: descripcion
        };
        console.log(nota);
    };

    return (
        <View style={styles.contenedorpadre}>
            <View style={styles.tarjeta}>
                <View style={styles.container}>
                    <TextInput 
                        placeholder='Titulo' 
                        style={styles.input} 
                        value={titulo} 
                        onChangeText={setTitulo} 
                    />
                    <TextInput
                        placeholder='Ingresa el Detalle'
                        multiline={true}
                        numberOfLines={4}
                        style={[styles.input, styles.detalleInput]}
                        value={descripcion}
                        onChangeText={setDescripcion}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.btnEnviar} onPress={handleGuardar}>
                        <Text style={styles.txtbtnEnviar}>
                            Guardar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorpadre: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'rgba(94, 219, 153, 0.6)', // Color más claro y más transparente
        borderRadius: 20,
        width: '90%',
        padding: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 9,
    },
    container: {
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    detalleInput: {
        height: 120, // Ajusta esta altura según sea necesario
        textAlignVertical: 'top' // Para que el texto empiece desde la parte superior
    }, 
    btnEnviar: {
        backgroundColor: '#7EDB5E',
        borderBlockColor: '#B2DB1C',
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
    },
    txtbtnEnviar: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
