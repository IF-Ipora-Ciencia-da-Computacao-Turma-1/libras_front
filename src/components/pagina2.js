import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";
  
import Lista from "./lista";

export default function App({navigator}) {

    const [advice, setAdvice] = useState({});
    let lista = ""
    
   
    const getAdvice = () => {
        //console.log("PAssei aqui")

        
        axios.get("http://127.0.0.1:8000/api/cidade/index")
        .then((response) => {
            //console.log(response.data)
            setAdvice(response.data)
            console.log(advice)
        });
        //axios.defaults.headers.common={}
        //console.log(lista)
        //console.log("lista")

    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.advice}>{advice.id}</Text>
            <Text style={styles.advice}>{advice.nome}</Text>
           
            <Button title="Get Advice" 
                onPress={getAdvice} color="green" />
            <Lista style={styles.lista} props = {advice}></Lista>
        </View>
    );
}
  
const styles = StyleSheet.create({
    /*container: {
       // backgroundColor: "#fff",
       // width: '100vw',
       // height: '100vh',
       // alignItems: "center",
       // justifyContent: "center",
    },
    advice: {
        //fontSize: 20,
        //fontWeight: "bold",
        //marginHorizontal: 20,
    },
    lista:{
       // width:'100vw'
    }*/
});