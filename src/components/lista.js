import React from "react";
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View,FlatList, Text } from "react-native";

const Item = ({content}) => (
    <View style={styles.item}>
      <Text style={styles.Text}>{content}</Text>
    </View>
  );

export default function lista({props}){
    console.log(props)

    return(
        <SafeAreaView>
            <StatusBar backgroundColor="red"></StatusBar>
            <View>
                <FlatList 
                    data={props}
                    keyExtractor={item => item.id}
                    renderItem = {({item}) => <Item content={item.nome} />}
                />
            </View>
        </SafeAreaView>
       
        
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexWrap:'wrap',
        width:'100vw',
        backgroundColor:'orange',
       // alignItems: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
       // marginVertical: 8,
       // marginHorizontal: 16,
    },
    Text:{
        color:'black',
    }
})