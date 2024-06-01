import React, { useState,useEffect } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,ScrollView } from 'react-native'

export default function Home(props) {
  
    return (
        <ScrollView>
            <View>
                <TouchableOpacity style={styles.boton} onPress={()=>props.navigation.navigate('Nueva Nota')}>
                    <Text style={styles.textBoton} >Agregar una nota</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
  
}

const styles = StyleSheet.create({
    boton:{
        backgroundColor:'#7EDB5E',
        borderBlockColor:'#B2DB1C',
        borderRadius:30,
        marginLeft:30,
        marginRight:30,
        marginTop:30,
    },
    textBoton:{
        textAlign:'center',
        padding:10,
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    }
})
