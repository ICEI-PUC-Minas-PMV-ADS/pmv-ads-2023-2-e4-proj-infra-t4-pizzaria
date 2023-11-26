import React, { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from '../redux/apiCalls';
import { useNavigation } from '@react-navigation/native';





const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, currentUser } = useSelector((state) => state.user);
    const navigation = useNavigation();


    const handleClick = async (e) => {
        e.preventDefault();
        await login(dispatch, { username, password });
    
        if (currentUser) {
            dispatch(login)
            navigation.navigate("Home");
        }else{
            console.log("Login Fail")
        }
      };
      const handleCreateAccountClick = () => {
        navigation.navigate("Registro");
    };

        return (
            <View style={{ backgroundColor: '#ff8f00', flex: 1 }}>
                <SafeAreaView
                    style={styles.SafeAreaView}>
                    <Text style={styles.text}>Login</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText= {setUsername}
                        value={username}
                        placeholder="Usuário"
                        keyboardType='email-address'
                        clearTextOnFocus={true}

                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Senha"
                        secureTextEntry={true}
                        clearTextOnFocus={true}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleClick} disabled={isFetching}>
                        <Text style={{ textAlign: 'center', color: '#FFF' }}>Login</Text>
                    </TouchableOpacity>


                    <Text style={{ fontWeight: "bold", textDecorationLine: 'underline', color: '#4040ff', marginBottom: 6 }} > Esqueceu a senha?</Text>
                    <TouchableOpacity onPress={handleCreateAccountClick}  disabled={isFetching}>
                    <Text style={{ fontWeight: "bold", textDecorationLine: 'underline', color: '#4040ff' }} > Criar uma conta?</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
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
            borderColor: '#C0C0C0',
            height: 300,
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