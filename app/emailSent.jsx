import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, StatusBar, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmailSentScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const [headerTextAnimation] = useState(new Animated.Value(400));
  const [bodyAnimation] = useState(new Animated.Value(400));

  useEffect(() => {
    Animated.timing(headerTextAnimation, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();

    Animated.timing(bodyAnimation, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSignIn = () => {
    if (!code.trim()) {
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }
    console.log('Entered Code:', code);
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Animated.Text style={[styles.headerText, { transform: [{ translateX: headerTextAnimation }] }]}>
          Verify {'\n'}Email.
        </Animated.Text>
      </View>

      {/* BODY */}
      <Animated.View style={[styles.body, { transform: [{ translateX: bodyAnimation }] }]}>
        <Text style={styles.bodyText}>Enter the code sent to your email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          placeholderTextColor="#ccc"
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
        />

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.cancelButton}>Go Home</Text>
        </TouchableOpacity>
      </Animated.View>
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
    alignItems: 'flex-start',
    paddingTop: 20,
    zIndex: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 75,
    marginLeft: 5,
  },
  body: {
    flexGrow: 1,
    backgroundColor: '#393939',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  bodyText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 25,
    textAlign: 'center',
    marginTop: 100,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    color: 'white',
    fontSize: 16,
    marginBottom: 25,
    paddingVertical: 15,
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  signInButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginTop: 70,
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  cancelButton: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default EmailSentScreen;
