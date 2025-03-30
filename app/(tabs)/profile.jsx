import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
  const router = useRouter();

  const [profileImage, setProfileImage] = useState(null);  // Initially empty
  const [contact, setContact] = useState({
    name: 'Enter contact',
    number: '+63 123 345 6789',
    address: '123 blabla, Caloocan City',
    relationship: 'Cousin'
  });

  const [profile, setProfile] = useState({
    name: 'Juan Dela Cruz',
    age: '00',
    location: 'Enter City'
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (field, value) => {
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    Alert.alert('Success', 'Contact info saved successfully!');
    setIsEditing(false);
  };

  // Image Picker Logic
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need access to your photos to upload an image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],         // Square cropping
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);  // Save the uploaded image
    }
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

      <View style={styles.content}>

        {/* Profile Card with Image Upload */}
        <View style={styles.card}>
          <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.image} />
            ) : (
              <View style={styles.emptyFrame}>
                <Ionicons name="camera" size={40} color="#aaa" />
                <Text style={styles.uploadText}>Upload Photo</Text>
              </View>
            )}
          </TouchableOpacity>

          <Text style={styles.name}>{profile.name}</Text>

          {isEditing ? (
            <>
              <TextInput
                style={styles.input}
                value={profile.age}
                onChangeText={(text) => handleProfileInputChange('age', text)}
                placeholder="Age"
                keyboardType="numeric"
              />

              <TextInput
                style={styles.input}
                value={profile.location}
                onChangeText={(text) => handleProfileInputChange('location', text)}
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <Text style={styles.info}>Age: {profile.age}</Text>
              <Text style={styles.info}>Location: {profile.location}</Text>
            </>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/medical')}
          >
            <Text style={styles.buttonText}>View Medical History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={isEditing ? handleSave : toggleEditMode}
          >
            <Text style={styles.saveButtonText}>
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Emergency Contact Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact</Text>

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
    marginTop: 80,
    paddingHorizontal: 20,
  },

  /* Profile Image Upload */
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  emptyFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  uploadText: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },

  /* Card Layout */
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
