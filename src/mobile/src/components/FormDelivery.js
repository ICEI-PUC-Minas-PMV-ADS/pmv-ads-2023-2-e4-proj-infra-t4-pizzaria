import React, {useState} from 'react';
import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FormDelivery() {
  const [modalVisible, setModalVisible] = useState(false);
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
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.anuncio}> Obrigado pela preferência. {'\n'}Sua pizza já está sendo preparada.</Text>
                <TouchableOpacity
                  style={[styles.buttonConf, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonAnuncio}>OK</Text>
                </TouchableOpacity>
              </View>
          </View>
          </Modal>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => setModalVisible(true)}>
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
  },

  buttonAnuncio: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  

  buttonConf: {

    height: 50,
    width: 110,
    margin: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderColor:"#F55529",
    backgroundColor: "#F55529",

    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor:'#F55529',
    padding: 70,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  anuncio: {
    width: 300,
    height: 50,
    display:'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#121A2C",
  },
  
})
