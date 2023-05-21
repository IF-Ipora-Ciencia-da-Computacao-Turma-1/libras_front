import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { React, useEffect, useState } from 'react';
import api from '../api/api';

export default function ProfileScreen({ navigation }) {

  const [data, setData] = useState([])

  const handleDelete = async(data) => {
    const result = await api.post('cidade/delete', data);  

  if(result.data == "Cidade deletada com Sucesso") {
     Alert.alert('Deletado','Deletado com sucesso');
    const result = await api.get('cidade/index');
    setData(result.data);
  } else {
    Alert.alert('Error','Ocorreu um problema, tente novamente')
  }
}

  useEffect(() => {
    const response = async () => {
      const result = await api.get('cidade/index');
      setData(result.data)
    }
    response()
  }, [])

  const Item = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => (handleDelete(item))}>
        <Text style={styles.input}>Cidade: {item.nome}</Text>
      </TouchableOpacity>
      <Text style={styles.input}>Estado: {item.cidade}</Text>
      <Text style={styles.input}>Sinal: {item.sinal}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <SafeAreaView style={styles.container}>
        
        <FlatList
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
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