import React from 'react';
import { View, Text, Button, Alert , Image } from 'react-native';

import {css} from '../css/homeCss'

export default function Home({navigation}){
    return(
        <View style = {css.container}>
            <Text style = {{backgroundColor: '#fff'}}>
                Home eeee
            </Text>

            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed Pagina 2')}
                title="Learn More"
                color="#841584"
            />
       

             <Button
            style = {css.botao}
             onPress={() => navigation.navigate("HomeScreen")}
             title="HomeScreen"/>


            <Button
                style = {css.botao}
                onPress={() => navigation.navigate("MapView")}
                title="Mapa"/>

            <Image source={require('../imgs/logoIF.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
                />
             
                
        </View>
    );
}