import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {AntDesign} from  "@expo/vector-icons";

export default function HeaderOrder(){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={30} color="#121A2C"/>
            </TouchableOpacity>
            <Text style={styles.titulo}>
                Meus Pedidos
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
     display:"flex",
     flexDirection:"row",
     alignItems: "center",
     gap:75,
     paddingTop:20,
    },
    titulo: {
        fontSize:24,
        fontWeight:"bold",
        color: "#121A2C",

    }
})





