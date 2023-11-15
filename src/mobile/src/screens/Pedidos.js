import { Text, View, StyleSheet } from "react-native";
import HeaderOrder from "../components/HeaderOrder";
import Order from "../components/Order";
import FormDelivery from "../components/FormDelivery";


export default function Pedidos(){
    return(
        <View style = {styles.container}>
          <HeaderOrder/>
          <Order/>
          <Order/>
          <Order/>
          <FormDelivery/>
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal:30,
    },
  });
  