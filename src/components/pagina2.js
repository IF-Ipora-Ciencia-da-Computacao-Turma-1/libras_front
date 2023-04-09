import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function PaginaDois(){
    return(
        <View>
            <Text style = {{backgroundColor: 'red'}}>
                Pagina 2 Teste
            </Text>

            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                title="Learn More"
                color="#841584"
            />
        </View>
    );
}