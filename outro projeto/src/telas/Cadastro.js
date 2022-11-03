import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";

import Input from "../componentes/Input";
import Button from "../componentes/Button";

import COLORS from '../const/colors';
import symbian_api from '../service/symbian';

const Cadastro = () => {

  /***** CAPTURA DE DADOS COM USO DE STATE *****/
  //CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA
  //OS DADOS DIGITADOS


// pega os valores nome
  const [inputs, setInputs] = React.useState({
    nome: '',
    email: '',
    celular: '',
    telefone: '',
    nomeResponsavel: '',
    telefoneResponsavel : ''
  });

  //FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA
  //STATE NO MÉTODO onChangeText
  const handlerOnChange = (text, input) => {

    setInputs((prevState) => (

      // console.log(prevState),
      //console.log(input + ' ' + text)

      //INJEÇÃO DE DADOS NA STATE
      { ...prevState, [input]: text }

    ));

  }

  /***** VALIDAÇÃO DOS DADOS DE CADASTRO *****/

  //STATE DE ERRO DE PREENCHIMENTO
  const [errors, setErrors] = React.useState({});

  //FUNÇÃO HANDLER QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE
  const handlerErrors = (errorMesage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMesage }));
  }

  // let regexMasks = (text) => {

  //   const inputs = [
  //     email '',
  //     telefone : '',
  //     telefoneResponsavel : '',
  //     celular : '',
  //     celularResponsavel : ''
  //   ]
  // }

  //FUNÇÃO DE VALIDAÇÃO
  const validate = () => {

    let validate = true;

    if (!inputs.nome) {
      validate = false;
      
      handlerErrors('Informe o nome do paciente', 'nome');
      // console.log('TITULO EM BRANCO.');
    }

    if (!inputs.telefone) {
      validate = false;
      handlerErrors('Informe o telefone', 'telefone');
      // console.log('DESCRIÇÃO EM BRANCO.');
    }

    if (!inputs.celular) {
      validate = false;
      handlerErrors('Informe o celular', 'celular');
      // console.log('CAPA EM BRANCO.');
    }

    if (!inputs.email) {
      validate = false;
      handlerErrors('Informe o email', 'email');
      // console.log('TITULO EM BRANCO.');
    }

    if (!inputs.nomeResponsavel) {
      validate = false;
      handlerErrors('Informe o nome do responsavel', 'nomeResponsavel');
      // console.log('DESCRIÇÃO EM BRANCO.');
    }

    if (!inputs.telefoneResponsavel) {
      validate = false;
      handlerErrors('Informe o telefone do responsavel', 'telefoneResponsavel');
      // console.log('CAPA EM BRANCO.');
    }

    if (validate) {
      //ENVIA OS DADOS PARA A API CADASTRAR.
      cadastrar();
      console.log('CADASTROU');
    }

    console.log(errors);

  }

  const cadastrar = () => {

    try {
      const response = symbian_api.post('/cadastrar-paciente',
        {
          nome_paciente, 
          telefone_paciente,
          celular_paciente,
          email_paciente,
          nome_responsavel,
          telefone_responsavel
        });
    } catch (error) { }

  }

  //const nome = 'TELA DE CADASTRO';
  return (

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>
          Cadastro de Paciente
        </Text>

        <View style={estilos.viewForm}>

          <Input
            placeholder="Nome"
            error={errors.nome}
            onFocus={() => { handlerErrors(null, 'nome') }}
            onChangeText={(text) => handlerOnChange(text, 'nome')} />

          <Input
            placeholder="E-mail"
            error={errors.email}
            onFocus={() => { handlerErrors(null, 'email') }}
            onChangeText={(text) => handlerOnChange(text, 'email')} />
            
          <Input
            placeholder="Celular"
            error={errors.celular}
            onFocus={() => { handlerErrors(null, 'celular') }}
            onChangeText={(text) => handlerOnChange(text, 'celular')} />

          <Input
            placeholder="Telefone"
            error={errors.telefone}
            onFocus={() => { handlerErrors(null, 'telefone') }}
            onChangeText={(text) => handlerOnChange(text, 'telefone')}/>         
          
          <Input
            placeholder="Nome do Responsavel"            
            error={errors.nomeResponsavel}
            onFocus={() => { handlerErrors(null, 'nomeResponsavel') }}
            onChangeText={(text) => handlerOnChange(text, 'nomeResponsavel')} />
          
          <Input
            placeholder="Telefone do Responsavel"
            error={errors.telefoneResponsavel}
            onFocus={() => { handlerErrors(null, 'telefoneResponsavel') }}
            onChangeText={(text) => handlerOnChange(text, 'telefoneResponsavel')} />
            
          <Input
            placeholder="Celular do Responsavel"
            error={errors.telefoneResponsavel}
            onFocus={() => { handlerErrors(null, 'celularResponsavel') }}
            onChangeText={(text) => handlerOnChange(text, 'celularResponsavel')} />

          <Button
            title="CADASTRAR"
            onPress={validate} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

const estilos = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: "bold",
  },
  viewForm: {
    marginVertical: 1,
  },

});

export default Cadastro;