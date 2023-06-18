import React from 'react';
import { View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';

import { css } from '../css/homeCss'
import { cssHome } from '../css/cssHome';

export default function Home({ navigation }) {
    return (
        <View style={cssHome.container2}>
            <View style={cssHome.container}>
                {/*<Text style = {{backgroundColor: '#fff'}}>
                Home eeee
            </Text>

            <Button
                onPress={() => Alert.alert('Button with adjusted color pressed Pagina 2')}
                title="Learn More"
                color="#841584"
            /> */}
                <Text style={cssHome.titulo}>
                GeoLibras
                </Text>
                <Text style={cssHome.descricao}>
                Um aplicativo para encontrar nomes de cidades na Lingua Brasileira de Sinais (LIBRAS)
                </Text>
                <View style={cssHome.Navegador}>
                    <TouchableOpacity style={cssHome.botao} onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={cssHome.textoBotao}>HomeScreen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={cssHome.botao} onPress={() => navigation.navigate("MapView")}>
                        <Text style={cssHome.textoBotao}>Mapa</Text>
                    </TouchableOpacity>
                </View>

                <Image source={require('../imgs/logoIF.png')}
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                />


            </View>
        </View>
    );
}