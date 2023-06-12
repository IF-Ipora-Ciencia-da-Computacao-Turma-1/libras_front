import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert, Button,Image } from 'react-native';
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
    <View style = {styles.cardItem}>
      <TouchableOpacity style = {styles.cardItemSize}
        onPress={() => (/*handleDelete(item) //Função deletava os objetos salvos*/()=>{console.log('Clicado')})}>

        <View style={styles.cardItemContent}>
          <View  style={styles.Img}>
              <Image 
              style = {styles.Imagem}
                source={{uri:`${item.sinal}`}}/>
             
          </View>
            
          <View style={styles.Conteudo} >
            <Text style={styles.input}>Cidade: {item.nome}</Text>
            <Text style={styles.input}>Estado: {item.cidade}</Text>
          </View>
          
        </View>
        

        
        
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={styles.container}>
     
             
      <SafeAreaView style={styles.container}>
      <Button        
             title="Home"/>

        <FlatList
          style={styles.List}
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
  
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  backgroundColor: '#15B6D6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bottom: 0,
  boxSizing: 'border-box',
},

title: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 50,
},

cardItem:{

  width: '95%', 
  height: 200,
  borderRadius: 10,
  borderColor: '#15B6D6',
  borderWidth: 1,
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
  //margin: 'auto',
  alignSelf: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

cardItemContent:{

  display: 'flex',
  flexDirection: 'row',
  height: '100%',

  
 /* backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'row',
  padding: 5, 
  maxWidth: '90%',
  height: '100%',
  maxHeight: '100%', 

  alignSelf: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  */
},

List:{
    backgroundColor: '#fff',
    display: 'flex',
    maxWidth: '100%',
    
},

input: {
  marginTop: 10,
  height: 40,
  borderRadius: 10,
  paddingHorizontal: 24,
  fontSize: 16,
  //alignItems: 'stretch'
},

Img:{
 
  borderColor: '#15B6D6',
  borderWidth: 1,
  width: '100%',
  maxWidth: "30%",
  boxSizing: 'border-box',
},

Imagem:{
  height: '100%',
  width: '100%',
  borderRadius: 10,
},

Conteudo:{
  height: '100%',
  padding: 10,
},

cardItemSize:{
  width: '100%',
  height: '100%',

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