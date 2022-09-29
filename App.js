import React from "react";
import { StyleSheet } from "react-native";

import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";

const App = ()=>{

  //const nome = 'SENAI - JANDIRA';
  return(

    // <View>
    //   <Text style={estilo.titulo}>{nome}</Text>
    // </View>  
    //<Login />
    <Listagem/>
    //<CadasListro/>

  );

}

const estilo = StyleSheet.create({
  container:{},
  titulo:{
    width:"100%",
    backgroundColor:"#F00",
    textAlign:"center",
    fontSize:16,
    lineHeight:26,
    color:"#FFF",
    fontWeight:"bold",
    padding:16,
  },
});

export default App;