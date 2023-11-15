import React from 'react';
import { StyleSheet, TextInput, SafeAreaView, Text, Button, TouchableOpacity } from "react-native";

const Login = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');


    return (
        <SafeAreaView
            style={styles.SafeAreaView}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Email"
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
            <TouchableOpacity style={styles.button}>
                <Text style={{textAlign: 'center', color: '#FFF'}}> Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginBottom: 10, 
    },
    SafeAreaView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '25%',
        borderWidth: 1,
        borderColor: 'C0C0C0',
        height: 300,
        margin: 5,
        borderRadius: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 20,
        textAlign: 'center',
        borderColor: 'C0C0C0'
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