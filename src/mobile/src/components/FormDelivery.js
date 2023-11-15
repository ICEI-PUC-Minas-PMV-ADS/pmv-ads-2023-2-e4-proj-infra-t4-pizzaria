import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FormDelivery() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite Suas Informações</Text>
      <View style={styles.form}>
        <TextInput 
          placeholder="Nome e Sobrenome"
          style={styles.input}/>
        <TextInput 
          placeholder="Telefone"
          style={styles.input}
          keyboardType="phone-pad"/>
        <TextInput 
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"/>
        <TextInput 
          placeholder="Endereço"
          style={styles.input}/>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}>
            <Text style={styles.buttonName}>Fechar Pedido</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,

    marginTop: 40,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C0C0C0",
    paddingVertical: 20,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#121A2C",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    height: 48,
    width: 269,
    paddingLeft: 16,

    borderWidth: 1,
    borderColor: "#121A2C",
    borderRadius: 5,

    backgroundColor: "#F3EAEA"
  },
  button: {
    height: 55,
    width: 269,
    
    borderWidth: 1,
    borderRadius: 5,

    backgroundColor: "#131A2B",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonName: {
    color: "#FEBA26",
    fontSize: 20,
    fontWeight: "bold"
  }
})