import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IntegrantesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Integrantes</Text>            
            <Image source={{uri:'https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170520834/78235106-avatar-joven-hombre-ilustraci%C3%B3n-del-vector-del-car%C3%A1cter-de-dise%C3%B1o.jpg'}} style={styles.img}/>
            <Text>Jhonathan Carrasco</Text>
            <Image source={{uri: 'https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508378/77702857-avatar-joven-hombre-ilustraci%C3%B3n-vectorial-de-dise%C3%B1o-avatar.jpg'}} style={styles.img}/>
            <Text>Pablo Bejarano</Text>            
            <Image source={{uri: 'https://us.123rf.com/450wm/aurora72/aurora721606/aurora72160600004/59282566-icono-de-ni%C3%B1as-avatar-ilustraci%C3%B3n-de-la-mujer-icono-cara-de-estilo-de-dibujos-animados-iconos.jpg'}} style={styles.img}/>
            <Text>Lizeth López</Text>            
            <Image source={{uri: 'https://png.pngtree.com/png-vector/20220817/ourlarge/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png'}} style={styles.img}/>
            <Text>Paola Tamayo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        paddingVertical: 40,
        fontWeight: 'bold',
        color: '#101f66'
    },
    img:{
        width:60,
        height:100,
        resizeMode:'contain'
    }
})