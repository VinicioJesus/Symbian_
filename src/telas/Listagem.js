import React, { useState, useEffect } from "react";
import {  Text, 
          View, 
          StyleSheet, 
          SafeAreaView, 
          ScrollView,
          Image } from "react-native";

import COLORS from '../const/colors';
import apiLivraria from '../service/apiLivraria';
import capaLivro150 from '../assets/livros/lor150.png';

const Listagem = ()=>{

    const [livros, setLivros] = useState([]);

    useEffect(
        ()=>{
            apiLivraria.get('/listarLivros')
            .then(
                (data)=>{
                    console.log(data.data[5]);
                    setLivros(data.data);
                }
            )
        },
        []
    );

    return(
                <ScrollView>

                    <View style={estilos.container}>

                        {livros.map(livro=>{
                            <View style={estilos.post}>
                                <Image style={estilos.imagem} source={capaLivro150}></Image>
                                <Text style={estilos.titulo}></Text>
                            </View>
                        })}

                        <View style={estilos.post}>
                            <Image style={estilos.imagem} source={capaLivro150}/>
                            <Text style={estilos.titulo}>O Senhor dos Aneis</Text>
                        </View>

                    </View>

                </ScrollView>
    );

    

}

const estilos = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:'#CCC',
        padding:15,
        marginVertical:5,
        borderRadius:5,
        elevation:5,
    },
    imagem:{
        borderRadius:5,
        marginVertical:16,
        marginLeft:16
    },
    titulo:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
});

export default Listagem;