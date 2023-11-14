import { Text, View, StyleSheet } from "react-native";
import { popularProducts } from "../data";


export default function Order(){
    return(
        <View style = {styles.container}>
                <Image source={require("https://github.com/walbergomes/imgs-eixo4/blob/main/pizza2.png?raw=true")}/>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
   },
 })