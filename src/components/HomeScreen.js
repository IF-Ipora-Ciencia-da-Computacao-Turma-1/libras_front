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

      <View style={styles.inputCard}>
        <Text style={styles.title}>Cadastrar nova cidade</Text>
          <View style={styles.inputContainer}> 

          <View style={styles.inputs}> 
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
          </View>
          <TouchableOpacity  style={styles.button}
            onPress={handleSubmit(handleCreate)}
            >
          {/* <TouchableOpacity style={styles.button} onPress={handleCreate()}>  */}
            <Text style={styles.buttonText}>Salvar dados da cidade</Text> 
          </TouchableOpacity> 

          <View style={styles.navButtons}>
           
            <Button 
              title="home"
              onPress={() => navigation.navigate('Home')}
            />

             <Button style={styles.navButton}
             
              title="Visualizar Cidades"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
          
          </View>
        <StatusBar style="light" />
      </View>
     

    </View>
    );
  }

  
const styles= StyleSheet.create({
container: {
    /*
  flex: 1,
  backgroundColor: '#D93600',
  alignItems: 'center',*/
  width: '100%',
  height: '100%',
  backgroundColor: '#15B6D6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: '0',
  boxSizing: 'border-box',

},

inputCard:{

  backgroundColor: '#fff',

  width: '90%',
  maxWidth: '100%',
  maxHeight: '90%',
  borderRadius: '10px',
  display: 'flex',  
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: '10px',
  marginTop: '30px',


},

title: {
  color: '#3E3E3E',
  fontSize: '3rem',
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: '10px',
  marginBottom: '10px',
  
},


inputContainer: {
  flex: 1,
  marginTop: 20,
  marginBottom: 20,
  width: '95%',
  padding: 20,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  alignItems: 'stretch',
  backgroundColor: '#fff'
},

input: {
  marginTop: 15,
  height: '3rem',
  backgroundColor: '#fff',
  borderRadius: 7,
  paddingHorizontal: '1rem',
  fontSize: 16,
  alignItems: 'stretch',
  borderWidth: 1,
  borderColor: '#15B6D6',
},

inputs: {
  display: 'flex',
  justifyContent: 'space-evenly ',
  marginBottom: '1rem',
},

navButtons:{
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1rem',
  marginBottom: '1rem',
  justifyContent: 'space-between',

},

navButton:{
  backgroundColor: 'red',
},



button: {
  marginTop: 10,
  height: 60,
  backgroundColor: '#FFC831',
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
  fontSize: 20,
},

});