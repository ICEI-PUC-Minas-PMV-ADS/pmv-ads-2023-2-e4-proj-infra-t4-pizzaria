import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


const Login = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');


    return (
        <View style={{backgroundColor: '#ff8f00', flex: 1}}>
        <SafeAreaView
            style={styles.SafeAreaView}>
            <Text style={styles.text}>Registre-se</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Nome"
                value={text}
                keyboardType='email-address'
                clearTextOnFocus={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Sobrenome"
                value={text}
                keyboardType='email-address'
                clearTextOnFocus={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Usuário"
                value={text}
                keyboardType='email-address'
                clearTextOnFocus={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Senha"
                secureTextEntry={true}
                clearTextOnFocus={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                secureTextEntry={true}
                clearTextOnFocus={true}
            />
            <Text style={styles.textpolicy}>By creating an account, i consent to the processing of my personal data in accordance with the <Text style={{fontWeight: "bold"}}> PRIVACY POLICY</Text></Text>

           
            <TouchableOpacity style={styles.button}>
                <Text style={{textAlign: 'center', color: '#FFF'}}> Registre-se</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: "bold", textDecorationLine: 'underline', color:'#4040ff'}}> Já possui uma conta?</Text>
        </SafeAreaView>
        </View>

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
        top: '18%',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        height: 500,
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

export default Login;