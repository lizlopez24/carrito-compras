import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { db } from '../config/Config'
import { ref, set } from "firebase/database";
import { TextInput } from 'react-native-gesture-handler';

export default function ListaProductosScreen() {
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')

function guardar(producto: string, cantidad: number, precio:number) {
        set(ref(db, 'usuarios/' + producto), {
          quantity: cantidad,
          cost: precio
        });
    
        Alert.alert('Mensaje', 'Producto guardado')
    }
    return (
        <View>
        <Text>Registro de producto</Text>
        <TextInput
            placeholder='Ingrese el nombre del producto'
            onChangeText={ (texto) => setProducto(texto)}
        />
        <TextInput
            placeholder='Ingrese la cantidad'
            onChangeText={ (number) => setCantidad(number)}
        />
        <TextInput
            placeholder='Ingrese el precio'
            onChangeText={ (number) => setPrecio(number)}
        />

        <Button title='Guardar producto' onPress={ () => guardar(producto,parseInt(cantidad),parseFloat(precio)) }/>
        </View>
  )
}

const styles = StyleSheet.create({})