import { StatusBar } from 'expo-status-bar';
import {Text, View, FlatList, SafeAreaView, TouchableOpacity, Button,Image } from 'react-native';
import { React, useEffect, useState } from 'react';
import api from '../api/api';


import { cssProfileScreen } from '../css/cssProfileScreen';


export default function ProfileScreen({ navigation }) {

  const [data, setData] = useState([])

  useEffect(() => {
    const response = async () => {
      const result = await api.get('cidade/index');
      setData(result.data)
    }
    response()
  }, [])

  const Item = ({item}) => (
    <View style = {cssProfileScreen.cardItem}>
      <TouchableOpacity style = {cssProfileScreen.cardItemSize}
        //onPress={() => navigation.navigate('VisualizarPin', {item: item})}
        onPress={() => console.log( item )}

        >
        
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
      
        <FlatList
          style={cssProfileScreen.List}
          data={data}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
        <Button        
             title="Voltar"
             onPress={() => navigation.navigate('Home')}/>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
    );
  }

  
