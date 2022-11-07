import React from "react";
import {    View, 
            Text, 
            TextInput, 
            StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import COLORS from '../const/colors';

const Input = ({label, error, onFocus=()=>{}, ...props})=>{

    return(

        <View style={estilos.formContainer}>
            
            <Text style={estilos.inputLabel}>{label}</Text>

            <View style={[estilos.inputContainer, 
                        {borderColor: error ? COLORS.red : COLORS.darkBlue }]}>
                
                <TextInput 
                    style={estilos.textInput}
                    autoCorrect={false}
                    onFocus={()=>{onFocus()}}
                    {...props}
                />
            </View>

            <Text>{error}</Text>

        </View>

    )

}

const estilos = StyleSheet.create({

    formContainer:{
        marginBottom:5,
    },
    inputLabel:{
        marginVertical:1,
        fontSize:15,
        color:COLORS.gray,
    },
    inputContainer:{
        height:55,
        backgroundColor:COLORS.light,
        flexDirection:"row",
        paddingHorizontal:15,
        borderWidth:0.5,
        alignItems:"center",    
    },
    textInput:{
        color:COLORS.darkBlue,
        flex:1,
    },
    

});

export default Input;