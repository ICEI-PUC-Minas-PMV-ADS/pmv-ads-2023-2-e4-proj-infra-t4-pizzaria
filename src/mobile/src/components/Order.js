import { Text, View, StyleSheet, Image } from "react-native";
import { popularProducts } from "../data";


export default function Order(){
    return(
        <View style={styles.container}>
            <View style={styles.pizzaInfo}>
                <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={{uri:"https://github.com/walbergomes/imgs-eixo4/blob/main/pizza1.png?raw=true"}}
                />
                <View style={styles.namePizza}>
                    <View>
                        <Text style={styles.titulo}>
                            Queijos
                        </Text>
                        <Text style={styles.subTitulo}>
                            Separando Pedido. . .
                        </Text>
                    </View>
                    <Text style={styles.price}>
                        <Text style={styles.cifrao}>$ </Text>
                          38,00
                    </Text>
                </View>
            </View>  
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop:20,

        borderWidth: 1,
        borderRadius:10,
        borderColor: "#COCOCO",
        paddingVertical: 10,
    },

    image: {
        width: 100,
        height: 100,
    },

    pizzaInfo: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:80,
    },

    namePizza: {
        display:"flex",
        flexDirection:"column",
        gap: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight:"bold",
        color:"#121A2C",
    },
    subTitulo: {
        fontSize:13,
        color: "#FEPA26"     
    },
    price: {
        fontSize: 20,
        fontWeight:"bold",
        color: "#121A2C",
    },
    cifrao:{
        fontSize:18,
        color:"#FEDA26"
    }
    

 })