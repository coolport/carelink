import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, StatusBar, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Password Recovery',
      'An email has been sent to your email address with instructions on how to recover your password.'
    );
  };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    navigation.replace('(tabs)'); // Correct navigation to /app/(tabs)/index.tsx
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      {/* Hide Status Bar */}
      <ExpoStatusBar style="light" hidden={true} />

      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require('../assets/images/favicon.png')} style={styles.favicon} />
        <Text style={styles.brandName}>Carelink</Text>
      </View>

      {/* FORM */}
      <ScrollView contentContainerStyle={styles.body}>

        {/* Username */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#9E110D"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity onPress={showAlert}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('register')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9E110D',
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  favicon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  brandName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#9E110D',
    textAlign: 'right',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#9E110D',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  signUpButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9E110D',
  },
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9E110D',
  },
});
