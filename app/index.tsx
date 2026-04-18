
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Colors from '@/constants/Colors';

// Credenciales válidas para el login 
const VALID_EMAIL = 'usuario@correo.com';
const VALID_PASSWORD = '1234';

// Pantalla de login
export default function LoginScreen() {
    // Variables de estado para almacenar el email, la contraseña y el mensaje de error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Funciones para manejar los cambios en los campos de texto y el evento de login
    const handleEmailChange = (text: string) => {
        setEmail(text);
    }

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    }

    const handleLogin = () => {
        if (password !== VALID_PASSWORD) {
            return setError('Invalid password, please try again.');
        }
        if (email !== VALID_EMAIL) {
            return setError('Invalid email, please try again.');
        }

        setError("");

        router.push({
            pathname: "/(tabs)",
            params: { email },
        });
    }


    // Renderiza la pantalla de login con campos de texto para el email y la contraseña, y un botón de login
    return (
        <View style={[styles.container, { backgroundColor: Colors.light.background }]}>
            <Text style={[styles.title, { color: Colors.light.text }]}>Login Screen</Text>

            <TextInput placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.input, { color: Colors.light.text, backgroundColor: '#fff' }]}
                placeholderTextColor="#999"
                value={email}
                onChangeText={handleEmailChange} />

            <TextInput placeholder="Password"
                secureTextEntry
                style={[styles.input, { color: Colors.light.text, backgroundColor: '#fff' }]}
                placeholderTextColor="#999"
                value={password}
                onChangeText={handlePasswordChange} />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {error ? <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text> : null}
        </View>
    );
}

// Estilos para la pantalla de login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
