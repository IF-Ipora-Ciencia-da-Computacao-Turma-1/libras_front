import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";
  
export default function App({navigator}) {
    const [advice, setAdvice] = useState("");
  
    
    const getAdvice = () => {
        console.log("PAssei aqui")
        //axios.defaults.headers.common={}
        axios.get("https://viacep.com.br/ws/01001000/json/")
        .then((response) => {
            console.log(response)
        });
      
    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.advice}>{advice}</Text>
            <Button title="Get Advice" 
                onPress={getAdvice} color="green" />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    advice: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
});