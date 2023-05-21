import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { React, useEffect, useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import api from '../api/api';

export default function HomeScreen({ navigation }) {

  const { control, handleSubmit } = useForm();

  const handleCreate = async(data)=> {
      // console.log(data);
      const result = await api.post('cidade/store', data);  
      // console.log(result)
    
    if(result.data == "Cidade adicionada") {
       Alert.alert('Cadastrado','Cadastrado com sucesso')
      
    } else {
      Alert.alert('Error','Ocorreu um problema, tente novamente')
    }
  }

  useEffect(() => {
    const response = async () => {
      const result = await api.get('cidade/index');
      // console.log(result.data);
    }
    response()
  }, [])
  
  
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button
    //     title="Go to Profile"
    //     onPress={() => navigation.navigate('Profile')}
    //   />
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar nova cidade</Text>
        <View style={styles.inputContainer}> 
        <Controller
              control={control}
              name="estado"
              render={({field:{onChange,onBlur,value}})=>(
                <TextInput
                placeholder="Informe o estado"
                onChangeText={onChange}
                onBlur= {onBlur}
                value={value}
                style={[styles.input]}
                
                />
                )}
            />
          <Controller
              control={control}
              name="nome"
              render={({field:{onChange,onBlur,value}})=>(
                <TextInput
                placeholder="Informe a cidade"
                onChangeText={onChange}
                onBlur= {onBlur}
                value={value}
                style={[styles.input]}
                
                />
                )}
            />
             <Controller
              control={control}
              name="sinal"
              render={({field:{onChange,onBlur,value}})=>(
                <TextInput
                placeholder="Informe o sinal"
                onChangeText={onChange}
                onBlur= {onBlur}
                value={value}
                style={[styles.input]}
                
                />
                )}
            />
          <TouchableOpacity  style={styles.button}
            onPress={handleSubmit(handleCreate)}
            >
          {/* <TouchableOpacity style={styles.button} onPress={handleCreate()}>  */}
            <Text style={styles.buttonText}>Salvar</Text> 
          </TouchableOpacity> 
          <Button
            title="Visualizar"
            onPress={() => navigation.navigate('Profile')}
          />
          <Button
            title="home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      <StatusBar style="light" />

    </View>
    );
  }

  
const styles= StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#D93600',
  alignItems: 'center',
},
title: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 50,
},
inputContainer: {
  flex: 1,
  marginTop: 30,
  width: '90%',
  padding: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  alignItems: 'stretch',
  backgroundColor: '#fff'
},
input: {
  marginTop: 10,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 10,
  paddingHorizontal: 24,
  fontSize: 16,
  alignItems: 'stretch'
},
button: {
  marginTop: 10,
  height: 60,
  backgroundColor: 'blue',
  borderRadius: 10,
  paddingHorizontal: 24,
  fontSize: 16,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 20,
  shadowOpacity: 20,
  shadowColor: '#ccc',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
}
});