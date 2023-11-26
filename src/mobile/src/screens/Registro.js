import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';


const Registro = () => {
    const [firstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, currentUser } = useSelector((state) => state.user);



    const navigation = useNavigation()

    const handleClick = async (e) => {
        e.preventDefault();
        register(dispatch, { username, password, firstName, LastName, UserEmail });
        navigation.navigate("Home")
    }

    return (

        <View style={{ backgroundColor: '#ff8f00', flex: 1 }}>
            <ScrollView style={styles.ScrollView}>
                <SafeAreaView
                    style={styles.SafeAreaView}>
                    <Text style={styles.text}>Registre-se</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setFirstName(text)}
                        placeholder="Nome"
                        keyboardType='email-address'
                        clearTextOnFocus={true}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setLastName(text)}
                            placeholder="Sobrenome"
                            keyboardType='email-address'
                            clearTextOnFocus={true}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUsername(text)}
                        placeholder="Usuário"
                        keyboardType='email-address'
                        clearTextOnFocus={true}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setUserEmail(text)}
                        placeholder="Email"
                        keyboardType='email-address'
                        clearTextOnFocus={true}
                        onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Senha"
                        secureTextEntry={true}
                        clearTextOnFocus={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                        secureTextEntry={true}
                        clearTextOnFocus={true}
                    />
                    <Text style={styles.textpolicy}>By creating an account, i consent to the processing of my personal data in accordance with the <Text style={{ fontWeight: "bold" }}> PRIVACY POLICY</Text></Text>
                    <TouchableOpacity style={styles.button} onClick={handleClick} disabled={isFetching}>
                        <Text style={{ textAlign: 'center', color: '#FFF' }}> Registre-se</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: "bold", textDecorationLine: 'underline', color: '#4040ff' }}> Já possui uma conta?</Text>
                </SafeAreaView>

            </ScrollView>

        </View >

    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    textpolicy: {
        fontSize: 12,
        margin: 10,
    },
    SafeAreaView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '10%',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        height: 600,
        margin: 12,
        borderRadius: 20,
        backgroundColor: '#FFF'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 20,
        textAlign: 'center',
        borderColor: '#C0C0C0'
    },
    button: {
        height: 30,
        margin: 12,
        width: 100,
        padding: 2,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#F55529',

    },
});

export default Registro;