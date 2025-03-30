import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ProfilePage = () => {
  const router = useRouter();

  const elderly = {
    name: 'Juan Dela Cruz',
    age: 78,
    location: 'Cebu City, Philippines',
    image: 'https://randomuser.me/api/portraits/men/13.jpg'
  };

  const [contact, setContact] = useState({
    name: 'Maria Dela Cruz',
    number: '+63 912 345 6789',
    address: '123 Main St, Cebu City',
    relationship: 'Daughter'
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    Alert.alert('Success', 'Contact info saved successfully!');
    console.log('Updated contact:', contact);
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>

      {/* Navbar */}
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

      {/* Main Content */}
      <View style={styles.content}>
        {/* Personal Info Card */}
        <View style={styles.card}>
          <Image source={{ uri: elderly.image }} style={styles.image} />
          <Text style={styles.name}>{elderly.name}</Text>
          <Text style={styles.info}>Age: {elderly.age}</Text>
          <Text style={styles.info}>Location: {elderly.location}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/medical-history')}
          >
            <Text style={styles.buttonText}>View Medical History</Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Contact Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Emergency Contact</Text>

          {isEditing ? (
            <>
              <TextInput
                style={styles.input}
                value={contact.name}
                onChangeText={(text) => handleInputChange('name', text)}
                placeholder="Contact Name"
              />

              <TextInput
                style={styles.input}
                value={contact.number}
                onChangeText={(text) => handleInputChange('number', text)}
                placeholder="Phone Number"
                keyboardType="phone-pad"
              />

              <TextInput
                style={styles.input}
                value={contact.address}
                onChangeText={(text) => handleInputChange('address', text)}
                placeholder="Address"
              />

              <TextInput
                style={styles.input}
                value={contact.relationship}
                onChangeText={(text) => handleInputChange('relationship', text)}
                placeholder="Relationship"
              />
            </>
          ) : (
            <>
              <Text style={styles.info}>Name: {contact.name}</Text>
              <Text style={styles.info}>Phone: {contact.number}</Text>
              <Text style={styles.info}>Address: {contact.address}</Text>
              <Text style={styles.info}>Relationship: {contact.relationship}</Text>
            </>
          )}

          <TouchableOpacity
            style={styles.saveButton}
            onPress={isEditing ? handleSave : toggleEditMode}
          >
            <Text style={styles.saveButtonText}>
              {isEditing ? 'Save Changes' : 'Edit Info'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  /* Floating Navbar */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
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

  /* Main Content */
  content: {
    flex: 1,
    marginTop: 80,  // Push content below the navbar
    paddingHorizontal: 20,
  },

  /* Card Styling */
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },

  /* Profile Image */
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 10
  },

  /* Text Styling */
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  info: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
    textAlign: 'center'
  },

  /* Card Title */
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  /* Input Fields */
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16
  },

  /* Buttons */
  button: {
    backgroundColor: '#9E110D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  saveButton: {
    backgroundColor: '#9E110D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
