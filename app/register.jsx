import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function showAlert() {
    Alert.alert(
      'Terms and Conditions',
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit mauris in felis efficitur, auctor blandit elit laoreet. Ut cursus varius erat, id vehicula lectus suscipit vitae. Proin venenatis, ex vitae auctor lacinia, dolor leo venenatis odio, vitae gravida lorem tellus quis velit. In ut tortor at turpis faucibus pellentesque nec et orci. Sed sem ante, imperdiet at tincidunt eu, convallis non tortor. Cras dapibus nulla ut sapien posuere consequat. Praesent pretium leo nec semper ornare. Morbi et purus sed nisi ultrices posuere ut a nulla. Nullam at convallis leo, vitae vehicula lacus. Ut ut fermentum est.`,
    );
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    if (!checked) {
      Alert.alert('Error', 'You must accept the terms and conditions.');
      return;
    }

    // Proceed with sign-up process
    navigation.navigate('emailSent');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create{'\n'}Account.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#ccc"
          value={fullName}
          onChangeText={setFullName}
        />
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
            style={[styles.input, styles.passwordInput]}
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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#ccc"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.termsContainer}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
          <TouchableOpacity onPress={showAlert}>
            <Text style={styles.termsText}>I have read and agreed to the terms and conditions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
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
    marginBottom: 25,
    width: '98%',
    marginLeft: '2%',
  },
  passwordInput: {
    flex: 1,
    marginRight: 10,
  },
  eyeButton: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginRight: 10,
  },
  generateButton: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 50,
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
  signUpButton: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: "white",
    marginTop: 70,
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RegisterScreen;
