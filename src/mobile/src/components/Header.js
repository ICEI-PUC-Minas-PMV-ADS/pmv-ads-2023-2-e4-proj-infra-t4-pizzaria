import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>
                PIZZARIA
            </Text>
            <Text>
                Loja 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo:{
        fontSize: 24,
        color: "#F55529",
        fontWeight: "bold",
   }

 })