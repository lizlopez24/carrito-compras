import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function BienvenidaScreen( {navigation}:any ) {
  return (
    <ImageBackground 
    source={{ uri: 'https://img.freepik.com/vector-premium/joven-mujer-feliz-hombre-renuncia-manos-gesto-hola-ilustracion-vector-dibujos-animados-estilo-plano_357257-1321.jpg'}}
    style={styles.container}
    >
        <Text style={{color:'indianred', fontSize:50}}>BENVENIDOS</Text>


        <TouchableOpacity onPress={ ()=> navigation.navigate('Tab')  } >
          <Text style={{color:'coral', fontSize:40}}>Continuar</Text>
        </TouchableOpacity>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        resizeMode:'cover'
    }
})