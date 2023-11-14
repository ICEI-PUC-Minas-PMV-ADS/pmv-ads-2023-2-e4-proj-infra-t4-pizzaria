import { Text, View, StyleSheet } from "react-native";

export default function TitlePedidos(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Meus Pedidos
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
   },
    titulo:{
        fontSize: 24,
        fontWeight: "bold",
        color:"#121A2C",
        textAlign: "center",
    }
 })