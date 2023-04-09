import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';


//importando os componentes
import PaginaUm from './src/components';


export default function App() {
  return (
    <View style={styles.container}>
       <PaginaUm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
