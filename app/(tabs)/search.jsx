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
    },
    {
      id: '5',
      name: 'Alice Johnson',
      specialty: 'Nurse',
      description: 'Experienced in post-surgery care and elderly assistance.',
      experience: '5 years',
      rate: '$120/day',
      rating: 4.7,
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '6',
      name: 'Mark Smith',
      specialty: 'Physical Therapist',
      description: 'Specializes in injury recovery and physical rehab.',
      experience: '8 years',
      rate: '$150/day',
      rating: 4.9,
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '7',
      name: 'Sophia Lee',
      specialty: 'Caregiver',
      description: 'Assists with daily living activities and companionship.',
      experience: '3 years',
      rate: '$100/day',
      rating: 4.5,
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      id: '8',
      name: 'John Doe',
      specialty: 'Senior Care Specialist',
      description: 'Provides specialized care for dementia patients.',
      experience: '6 years',
      rate: '$130/day',
      rating: 4.8,
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
      id: '9',
      name: 'Rachel Green',
      specialty: 'Geriatric Care',
      description: 'Focused on elderly care with a passion for emotional support.',
      experience: '10 years',
      rate: '$140/day',
      rating: 4.6,
      image: 'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
      id: '10',
      name: 'David Brown',
      specialty: 'Occupational Therapist',
      description: 'Helps patients regain independence in daily activities.',
      experience: '7 years',
      rate: '$125/day',
      rating: 4.8,
      image: 'https://randomuser.me/api/portraits/men/6.jpg'
    },
    {
      id: '11',
      name: 'Emily Davis',
      specialty: 'Pediatric Nurse',
      description: 'Specializes in taking care of young children and babies.',
      experience: '4 years',
      rate: '$115/day',
      rating: 4.7,
      image: 'https://randomuser.me/api/portraits/women/7.jpg'
    },
    {
      id: '12',
      name: 'James Williams',
      specialty: 'Nurse Practitioner',
      description: 'Works with physicians to diagnose and treat various conditions.',
      experience: '9 years',
      rate: '$135/day',
      rating: 4.9,
      image: 'https://randomuser.me/api/portraits/men/8.jpg'
    },
    {
      id: '13',
      name: 'Olivia Martinez',
      specialty: 'Home Health Aide',
      description: 'Assists with daily living tasks and provides personal care.',
      experience: '6 years',
      rate: '$110/day',
      rating: 4.6,
      image: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
      id: '14',
      name: 'Michael Clark',
      specialty: 'Speech Therapist',
      description: 'Helps with speech and language issues, specializing in stroke recovery.',
      experience: '5 years',
      rate: '$125/day',
      rating: 4.7,
      image: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
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
        {/* toFixed converts num to string */}


        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToMessages(item)}
        >
          <Text style={styles.addButtonText}>Contact Caregiver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* navbar start */}
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
      {/* navbar end */}

      <ImageBackground source={require('../../assets/images/8189.jpg')} resizeMode="cover" style={styles.background}>
        <FlatList
          data={caregivers}
          keyExtractor={(item) => item.id}
          renderItem={renderCaregiver}
          contentContainerStyle={styles.list}
          style={{ marginTop: 50 }}   // Add space beneath the navbar
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
    backgroundColor: 'transparent',  // Make navbar transparent
    position: 'absolute',            // Ensure it floats over background
    zIndex: 1,                       // Keep it above background
    width: '100%',
    marginBottom: 100,
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
    backgroundColor: '#9E110D',
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
