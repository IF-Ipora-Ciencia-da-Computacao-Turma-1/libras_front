import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert, Button,Image } from 'react-native';
import { React, useEffect, useState } from 'react';
import api from '../api/api';
import axios from 'axios';
import { cssProfileScreen } from '../css/cssProfileScreen';

export default function ProfileScreen({ navigation }) {

  const [data, setData] = useState([])

//   const handleDelete = async(data) => {
//     const result = await api.post('cidade/delete', data);  

//   if(result.data == "Cidade deletada com Sucesso") {
//      Alert.alert('Deletado','Deletado com sucesso');
//     const result = await api.get('cidade/index');
//     setData(result.data);
//   } else {
//     Alert.alert('Error','Ocorreu um problema, tente novamente')
//   }
// }

  useEffect(() => {
    const response = async () => {
      // const result = await axios.get('https://apiif.murillocastro.com.br/public/api/cidade/index');
      const result = await api.get('cidade/index');
      setData(result.data)
    }
    response()
  }, [])

  const Item = ({item}) => (
    <View style = {cssProfileScreen.cardItem}>
      <TouchableOpacity style = {cssProfileScreen.cardItemSize}
        onPress={() => (/*handleDelete(item) //Função deletava os objetos salvos*/()=>{console.log('Clicado')})}>
        
        <View style={cssProfileScreen.cardItemContent}>

          <View  style={cssProfileScreen.Img}>
              <Image 
              style = {cssProfileScreen.Imagem}
                source={{uri:`${item.sinal}`}}/>
             
          </View>
            
          <View style={cssProfileScreen.Conteudo} >
            <Text style={cssProfileScreen.input}>Cidade: {item.nome}</Text>
            <Text style={cssProfileScreen.input}>Estado: {item.estado}</Text>
          </View>
          
        </View>
    
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={cssProfileScreen.container2}>
     
             
      <SafeAreaView style={cssProfileScreen.container}>
      <Button        
             title="Home"/>

        <FlatList
          style={cssProfileScreen.List}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
    );
  }

  
