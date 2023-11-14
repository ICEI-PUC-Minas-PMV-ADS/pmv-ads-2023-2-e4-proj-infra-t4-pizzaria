import { Text, View, StyleSheet } from "react-native";
import TitlePedidos from "../components/TitlePedidos";
import Order from "../components/Order";

export default function Pedidos(){
    return(
        <View style = {styles.container}>
          <TitlePedidos/>
          <Order/>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  