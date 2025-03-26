import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { Header } from '@/components/ui/Header';


const SearchScreen = () => {

  const [messages, setMessages] = useState([]);

  const router = useRouter()
  const [caregivers, setCaregivers] = useState([
    { id: '1', name: 'Alice Johnson', specialty: 'Nurse', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '2', name: 'Mark Smith', specialty: 'Physical Therapist', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: '3', name: 'Sophia Lee', specialty: 'Caregiver', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '4', name: 'John Doe', specialty: 'Senior Care Specialist', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
  ]);

  const addToMessages = (caregiver) => {
    if (!messages.find(msg => msg.id === caregiver.id)) {
      setMessages((prev) => [...prev, caregiver]);
      Alert.alert('Added to Messages', `${caregiver.name} has been added.`);
    } else {
      Alert.alert('Already Added', `${caregiver.name} is already in your messages.`);
    }
  };

  const renderCaregiver = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addToMessages(item)}
        >
          <Text style={styles.addButtonText}>Add to Messages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  //like react, you can only return one parent view / div / component / etc
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/favicon.png')}  // Replace with your logo path
            style={styles.logo}
          />
          <Text style={styles.title}>Carelink</Text>
        </View>
        {/* Menu Icon */}
        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/*                                 Header end                                    */}

      <ImageBackground source={require('../../assets/images/bg2.png')} resizeMode="cover" style={styles.background}>


        <FlatList
          data={caregivers}
          keyExtractor={(item) => item.id}
          renderItem={renderCaregiver}
          contentContainerStyle={styles.list}
        />

      </ImageBackground >
    </View >
  );
};

//basically wrapped css.
//differences: camelCase instead of kebabCase
//             no px, because dp is default.
//             quotes on colors, strings, etc./
//u can technically use css or others like nativewind (tw port), but this is standard in modern react..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: '10%',
  },
  backButton: {
    padding: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  menuButton: {
    padding: 10,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  list: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  specialty: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }
});

export default SearchScreen;
