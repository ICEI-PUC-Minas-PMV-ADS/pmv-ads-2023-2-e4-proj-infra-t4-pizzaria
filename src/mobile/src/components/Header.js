import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function Header(){
    const navigation = useNavigation();
    
    const handleCreateAccountClick = () => {
        navigation.navigate("Pedidos");
    };
    return(
        <View style={styles.container}>
            
            <Text style={styles.logo}>
                PIZZARIA
            </Text>
            <TouchableOpacity onPress={handleCreateAccountClick}>
            <Icon Li name="shopping-bag" size={24} color="#F55529" />
            </TouchableOpacity>
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