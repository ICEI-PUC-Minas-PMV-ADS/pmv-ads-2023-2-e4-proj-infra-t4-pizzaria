import { Text, View, StyleSheet, Image } from "react-native";

export default function Order() {
  return (
    <View style={styles.container}>
      <View style={styles.pizzaInfo}>

        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: "https://github.com/walbergomes/imgs-eixo4/blob/main/pizza1.png?raw=true",
          }}
        />

        <View style={styles.namePizza}>
          <View>
            <Text style={styles.titulo}>Queijos</Text>
            <Text style={styles.subtitulo}>1 Und.</Text>
          </View>
          <Text style={styles.price}>
            <Text style={styles.cifrao}>$ </Text>
            42,00
          </Text>
          
        </View>
        
        
        

      </View>
    </View>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,

    marginTop: 20,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C0C0C0",
    paddingVertical: 20,
  },
  pizzaInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "flex-end",
    gap: 80,
  },
  image: {
    width: 100,
    height: 100,
  },
  namePizza: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121A2C"
  },
  subtitulo: {
    fontSize: 13,
    color: "#4B5563"
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121A2C",
  },
  cifrao: {
    fontSize: 20,
    color: "#FEBA26",
  }
})

