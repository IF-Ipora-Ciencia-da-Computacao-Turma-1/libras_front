import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const cidades = {

}

export default function MapHomeComponent(){
    return(
        <SafeAreaView style = {styles.SafeAreaView}>
            <StatusBar backgroundColor="red"></StatusBar>
            <View style={styles.container}>
                <MapView style={styles.map} 
                         initialRegion={{
                            latitude: -16.2980797,
                            longitude: -50.1164483,
                            latitudeDelta: 5,
                            longitudeDelta: 5,
                         }}/>
                
            </View>

        </SafeAreaView>

        
    )
}


const styles = StyleSheet.create({
    SafeAreaView:{
        width: '100%',
        flex:   1,

        backgroundColor: '#0000Ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
      width: '100%',
      height: '100%',
      
     
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });