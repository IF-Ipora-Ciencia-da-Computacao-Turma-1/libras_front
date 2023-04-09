import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

export default function PaginaUm(){
    return(
        <View>
            <Text style = {{backgroundColor: 'blue',}}>
                Pagina UM teste
            </Text>
            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                title="Learn More"
                color="#841584"
            />
        </View>
    );

}