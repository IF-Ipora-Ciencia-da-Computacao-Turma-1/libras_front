import { StatusBar } from 'expo-status-bar';
import { Text, View} from 'react-native';
import {css} from './src/css/css'

//importando os componentes
import PaginaUm from './src/components';


export default function App() {
  return (
    <View style={css.container2}>
       <PaginaUm/>
    </View>
  );
}

