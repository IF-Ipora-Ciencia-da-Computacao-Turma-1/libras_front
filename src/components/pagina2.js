import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import axios from 'axios';


import {css} from '../css/homeCss'

export default function PaginaDois({navigation}){
    return(
        <View style = {css.container2}>
            <Text style = {{backgroundColor: '#fff'}}>
                aaa
            </Text>

            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed Pagina 2')}
                title="Learn More"
                color="#841584"
            />
            <Button onPress={() => navigation.navigate("Home")}
             title="va para HOme"
             />
        </View>
    );
}