import { StyleSheet, Text, View} from 'react-native';

import * as Font from 'expo-font';


const cssHome = StyleSheet.create({
    titulo: {   
        color: '#fff',
        fontSize: 60,
        

    },
    descricao:{
        color: '#fff',
        textAlign: 'justify',
        maxWidth: '70%',
        fontSize: 20,
       

    },
    botao:{
      Color: '#FFD666',
      backgroundColor: '#FFD666',
      padding: 10,
      borderRadius: 54,
      margin: 10,
    },
    textoBotao:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        
        
    },
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#15B6D6',
        alignItems:'center',
        maxHeight: '90%',
    },
    container2:{
        flex: 1,
        flexDirection: 'column',
        maxHeight: '100%',
        maxWidth:'100%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#15B6D6',
    },
    navegador:{
        flex: 1,
        flexDirection: 'column'
    }
  });

  export {cssHome};