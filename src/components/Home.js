import React from 'react';
import { View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';

import { css } from '../css/homeCss'
import { cssHome } from '../css/cssHome';

export default function Home({ navigation }) {

    
    return (
        <View style={cssHome.container2}>
            <View style={cssHome.container}>
                <Text style={cssHome.titulo}>
                GeoLibras
                </Text>
                <Text style={cssHome.descricao}>
                Um aplicativo para encontrar nomes de cidades na Língua Brasileira de Sinais (LIBRAS)
                </Text>
                <View style={cssHome.Navegador}>
                <TouchableOpacity style={cssHome.botao} onPress={() => navigation.navigate("MapView")}>
                        <Text style={cssHome.textoBotao}>Mapa</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={cssHome.botao} onPress={() => navigation.navigate("Profile")}>
                        <Text style={cssHome.textoBotao}>Visualizar cidades</Text>
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