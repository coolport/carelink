import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const showAlert = () => {
    Alert.alert(
      'Password Recovery',
      'An email has been sent to your email address with instructions on how to recover your password.'
    );
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    navigation.navigate('/(tabs)');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Welcome{'\n'}Back!</Text>
      </View>

      {/* FIELDS */}
      <ScrollView contentContainerStyle={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* CHECKBOX */}
        <View style={styles.termsContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.termsText}>Remember Me</Text>
        </View>

        {/* BUTTON */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={showAlert}>
            <Text style={styles.forgotPW}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 40,
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 75,
    marginLeft: 5,
  },
  body: {
    backgroundColor: '#393939',
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 30,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    color: 'white',
    fontSize: 16,
    marginBottom: 25,
    paddingVertical: 15,
    width: '95%',
    alignSelf: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    width: '95%',
    alignSelf: 'center',
    marginBottom: 25,
  },
  passwordInput: {
    flex: 1,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    paddingVertical: 15,
  },
  eyeButton: {
    padding: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    color: 'white',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  forgotPW: {
    fontSize: 14,
    color: 'white',
    textAlign: 'right',
    marginRight: '2%',
  },
});

export default LoginScreen;
