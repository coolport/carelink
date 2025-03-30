import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
  const router = useRouter();

  // Sample data (replace with actual state or context)
  const elderly = {
    name: 'Juan Dela Cruz',
    age: 78,
    location: 'Cebu City, Philippines',
    image: 'https://randomuser.me/api/portraits/men/13.jpg'  // Use the permanent image
  };

  const [contact, setContact] = useState({
    name: 'Maria Dela Cruz',
    number: '+63 912 345 6789',
    address: '123 Main St, Cebu City',
    relationship: 'Daughter'
  });

  const [isEditing, setIsEditing] = useState(false);

  // Toggle Edit Mode
  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  // Update contact info
  const handleInputChange = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    Alert.alert('Success', 'Contact info saved successfully!');
    console.log('Updated contact:', contact);
    setIsEditing(false);  // Switch back to read-only mode
  };

  return (
    <View style={styles.container}>

      {/* Personal Info Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: elderly.image }}
          style={styles.image}
        />
        <Text style={styles.name}>{elderly.name}</Text>
        <Text style={styles.info}>Age: {elderly.age}</Text>
        <Text style={styles.info}>Location: {elderly.location}</Text>

        {/* Medical History Button */}
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

        {/* Edit/Save Button */}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',         // 👈 Keeps cards closer together
    paddingHorizontal: 20,            // Side padding only
    backgroundColor: '#f5f5f5',         // Background color for contrast
    paddingBottom: 0,
    marginTop: '20%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,                  // Consistent spacing between cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 10
  },
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16
  },
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

export default ProfilePage;
