import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useMessages } from '../context/MessagesContext';

const SearchScreen = () => {
  const router = useRouter();
  const { addToMessages } = useMessages();

  const [caregivers, setCaregivers] = useState([
    {
      id: '1',
      name: 'Alice Johnson',
      specialty: 'Nurse',
      description: 'Experienced in post-surgery care and elderly assistance.',
      experience: '5 years',
      rate: '$120/day',
      rating: 4.7,
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '2',
      name: 'Mark Smith',
      specialty: 'Physical Therapist',
      description: 'Specializes in injury recovery and physical rehab.',
      experience: '8 years',
      rate: '$150/day',
      rating: 4.9,
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '3',
      name: 'Sophia Lee',
      specialty: 'Caregiver',
      description: 'Assists with daily living activities and companionship.',
      experience: '3 years',
      rate: '$100/day',
      rating: 4.5,
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: '4',
      name: 'John Doe',
      specialty: 'Senior Care Specialist',
      description: 'Provides specialized care for dementia patients.',
      experience: '6 years',
      rate: '$130/day',
      rating: 4.8,
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    }
  ]);

  const handleAddToMessages = (caregiver) => {
    addToMessages(caregiver);
    Alert.alert('Added to Messages', `${caregiver.name} has been added.`);
  };

  const renderCaregiver = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.specialty}>{item.specialty}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.details}>Experience: {item.experience}</Text>
        <Text style={styles.details}>Rate: {item.rate}</Text>
        <Text style={styles.rating}>⭐ {item.rating.toFixed(1)} / 5</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToMessages(item)}
        >
          <Text style={styles.addButtonText}>Add to Messages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image source={require('@/assets/images/favicon.png')} style={styles.logo} />
          <Text style={styles.title}>Carelink</Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Menu clicked")} style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ImageBackground source={require('../../assets/images/bg2.png')} resizeMode="cover" style={styles.background}>
        <FlatList
          data={caregivers}
          keyExtractor={(item) => item.id}
          renderItem={renderCaregiver}
          contentContainerStyle={styles.list}
        />
      </ImageBackground>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    padding: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  background: {
    flex: 1,
  },
  list: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
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
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialty: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginTop: 5,
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginTop: 3,
  },
  rating: {
    fontSize: 14,
    color: '#ffb400',
    marginTop: 5,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
